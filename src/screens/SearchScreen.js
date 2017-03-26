import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, ActivityIndicator } from 'react-native';
import colors from '../config/colors'

import ViewContainer from '../components/ViewContainer';
import RepositoryListItem from '../components/RepositoryListItem';
import UserListItem from '../components/UserListItem';
import SearchInput from '../components/SearchInput';

import { List, Button, ButtonGroup, Card } from 'react-native-elements'

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 }]

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      searchBegins: false,
      searchIndex: 0,
      filteredData: [],
      filteredTrendingUsers: [],
      fetchingList: false,
      fetchingTrending: false,
    }

    this.switchQueryType = this.switchQueryType.bind(this)
  }

  componentDidMount() {
    this.fetchTrending();
  }

  fetchTrending() {

  }

  search(query, selectedIndex = null) {
    const selectedSearchType = selectedIndex !== null ? selectedIndex : this.state.searchIndex;
    const queryType = selectedSearchType === 0 ? 'repositories' : 'users';

    if (query) {
      this.setState({
        fetchingList: true,
      });

      fetch(`https://api.github.com/search/${queryType}?q=${query}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            query,
            filteredData: data.items,
            fetchingList: false,
          });
        })
        .done();
    }
  }

  switchQueryType(selectedIndex) {
    if (this.state.searchIndex !== selectedIndex) {
      this.setState({
        searchIndex: this.state.searchIndex === 0 ? 1 : 0,
      });
    }

    this.search(this.state.query, selectedIndex);
  }

  setSearchBegins() {
    this.setState({
      searchBegins: true,
    });
  }

  unsetSearchBegins() {
    this.refs['searchInput'].refs['searchField'].clear(0);
    this.refs['searchInput'].refs['searchField'].blur();

    this.setState({
      query: '',
      searchBegins: false,
      searchIndex: 0,
      filteredData: [],
    });
  }

  renderListItem(item, i) {
    if (this.state.searchIndex === 0) {
      return (
        <RepositoryListItem
          key={i}
          repository={item}
          navigation={this.props.navigation} />
      )
    } else {
      return (
        <UserListItem
          key={i}
          user={item}
          navigation={this.props.navigation} />
      )
    }
  }

  renderSearchOrTrending() {
    if (this.state.searchBegins) {
      return (
        <View>
          { this.state.fetchingList &&
            <ActivityIndicator
              animating={this.state.fetchingList}
              style={{height: 80}}
              size="large"
            />
          }

          { !this.state.fetchingList && this.state.filteredData.length > 0 &&
            <List containerStyle={styles.list}>
              {
                this.state.filteredData.map((item, i) => (
                  this.renderListItem(item, i)
                ))
              }
            </List>
          }
        </View>
      )
    } else {
      return (
        <View>
          { this.state.fetchingTrending &&
            <ActivityIndicator
              animating={this.state.fetchingTrending}
              style={{height: 80}}
              size="large"
            />
          }

          { !this.state.fetchingTrending &&
            <View>
              <Text style={{fontSize: 20, textAlign: 'center'}}>Trending in open source</Text>

                <ScrollView
                  automaticallyAdjustContentInsets={false}
                  horizontal={true}>
                    {
                      users.map((u, i) => {
                        return (
                          <Card
                            key={i}
                            containerStyle={{width: 300}}
                            title='HELLO WORLD'
                            image={{uri:u.avatar}}>
                            <Text style={{marginBottom: 10}}>
                              The idea with React Native Elements is more about component structure than actual design.
                            </Text>
                            <Button
                              backgroundColor='#03A9F4'
                              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                              title='VIEW' />
                          </Card>
                         )
                       })
                    }
                </ScrollView>
            </View>
          }
        </View>
      )
    }
  }

  renderCancelSearch() {
    if (this.state.searchBegins) {
      return (
        <Button
          buttonStyle={{marginLeft: 0, marginRight: 0, paddingLeft: 5}}
          textStyle={{fontFamily: 'AvenirNext-Medium'}}
          title='Cancel'
          backgroundColor='#fafafa'
          color={colors.primarydark}
          onPress={() => this.unsetSearchBegins()} />
      )
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBar
          barStyle="dark-content"
          />

        <View style={styles.searchBarWrapper}>
          <SearchInput
            onSubmitEditing={(event) => this.search(event.nativeEvent.text)} />

          { this.renderCancelSearch() }
        </View>

        <ButtonGroup
          onPress={this.switchQueryType}
          selectedIndex={this.state.searchIndex}
          buttons={['Repositories', 'Users']}
          textStyle={styles.buttonGroupText}
          selectedTextStyle={styles.buttonGroupTextSelected}
          containerStyle={{height: 30}} />

        <ScrollView keyboardShouldPersistTaps={'always'}>
          { this.renderSearchOrTrending() }
        </ScrollView>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  searchBarWrapper: {
    flexDirection:'row',
    marginTop: 20,
  },
  list: {
    marginTop: 0,
  },
  buttonGroupText: {
    fontFamily: 'AvenirNext-Bold',
  },
  buttonGroupTextSelected: {
    color: colors.black,
  },
});
