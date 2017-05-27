import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import SearchBar from 'react-native-search-bar';

import ViewContainer from '../components/ViewContainer';
import RepositoryListItem from '../components/RepositoryListItem';
import UserListItem from '../components/UserListItem';
import LoadingContainer from '../components/LoadingContainer';

import config from '@config';

import {connect} from 'react-redux';
import {searchRepos, searchUsers} from '@search';

const mapStateToProps = state => ({
  users: state.search.users,
  repos: state.search.repos,
  isPendingSearchUsers: state.search.isPendingSearchUsers,
  isPendingSearchRepos: state.search.isPendingSearchRepos,
});

const mapDispatchToProps = dispatch => ({
  searchRepos: query => dispatch(searchRepos(query)),
  searchUsers: query => dispatch(searchUsers(query)),
});

class Search extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      searchType: 0,
      searchStart: false,
      searchFocus: false,
    };

    this.switchQueryType = this.switchQueryType.bind(this);
    this.search = this.search.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  search(query, selectedType = null) {
    const {searchRepos, searchUsers} = this.props;

    const selectedSearchType = selectedType !== null
      ? selectedType
      : this.state.searchType;

    if (query !== '') {
      this.setState({
        query: query,
        searchStart: true,
      });

      selectedSearchType === 0 ? searchRepos(query) : searchUsers(query);
    }
  }

  switchQueryType(selectedType) {
    if (this.state.searchType !== selectedType) {
      this.setState({
        searchType: selectedType,
      });

      this.search(this.state.query, selectedType);
    }
  }

  renderItem = ({item}) => {
    if (this.state.searchType === 0) {
      return (
        <RepositoryListItem
          repository={item}
          navigation={this.props.navigation}
        />
      );
    } else {
      return <UserListItem user={item} navigation={this.props.navigation} />;
    }
  };

  render() {
    const {
      users,
      repos,
      isPendingSearchUsers,
      isPendingSearchRepos,
    } = this.props;
    const {query, searchType, searchStart} = this.state;

    return (
      <ViewContainer>
        <View>
          <View style={styles.searchBarWrapper}>
            <View style={styles.searchContainer}>
              <SearchBar
                ref="searchBar"
                hideBackground={true}
                textColor={config.colors.primaryDark}
                textFieldBackgroundColor={config.colors.greyLight}
                showsCancelButton={this.state.searchFocus}
                onFocus={() => this.setState({searchFocus: true})}
                onCancelButtonPress={() => {
                  this.setState({ searchStart: false, query: '' });
                  this.refs.searchBar.unFocus();
                }}
                onSearchButtonPress={(query) => {
                  this.search(query);
                  this.refs.searchBar.unFocus();
                }}
              />
            </View>
          </View>

          <ButtonGroup
            onPress={this.switchQueryType}
            selectedIndex={this.state.searchType}
            buttons={['Repositories', 'Users']}
            textStyle={styles.buttonGroupText}
            selectedTextStyle={styles.buttonGroupTextSelected}
            containerStyle={styles.buttonGroupContainer}
          />
        </View>
        
        {isPendingSearchRepos &&
          searchType === 0 &&
          <LoadingContainer
            animating={isPendingSearchRepos && searchType === 0}
            text={`Searching for ${query}`}
            style={styles.marginSpacing}
          />}

        {isPendingSearchUsers &&
          searchType === 1 &&
          <LoadingContainer
            animating={isPendingSearchUsers && searchType === 1}
            text={`Searching for ${query}`}
            style={styles.marginSpacing}
          />}

        {searchStart &&
          <View style={styles.listContainer}>
            <FlatList
              data={searchType === 0 ? repos : users}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
          </View>}

        {!searchStart &&
          <View style={styles.marginSpacing}>
            <Text style={styles.searchTitle}>
              {`Search for any ${searchType === 0 ? 'repository' : 'user'}`}
            </Text>
          </View>}

        {searchStart && !isPendingSearchRepos && repos.length === 0 && searchType === 0 &&
          <View style={styles.marginSpacing}>
            <Text style={styles.searchTitle}>
              No repositories found :(
            </Text>
          </View>}

        {searchStart && !isPendingSearchUsers && users.length === 0 && searchType === 1 &&
          <View style={styles.marginSpacing}>
            <Text style={styles.searchTitle}>
              No users found :(
            </Text>
          </View>}
      </ViewContainer>
    );
  }

  keyExtractor = item => {
    return item.id;
  };
}

Search.propTypes = {
  searchRepos: PropTypes.func,
  searchUsers: PropTypes.func,
  users: PropTypes.array,
  repos: PropTypes.array,
  isPendingSearchUsers: PropTypes.bool,
  isPendingSearchRepos: PropTypes.bool,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  searchBarWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  searchContainer: {
    width: Dimensions.get('window').width,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: config.colors.grey,
    backgroundColor: config.colors.white,
    flex: 1,
  },
  list: {
    marginTop: 0,
  },
  buttonGroupContainer: {
    height: 30,
  },
  buttonGroupText: {
    fontFamily: 'AvenirNext-Bold',
  },
  buttonGroupTextSelected: {
    color: config.colors.black,
  },
  loadingIndicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginSpacing: {
    marginTop: 40,
  },
  searchTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  listContainer: {
    borderTopColor: config.colors.greyLight,
    borderTopWidth: 1,
    marginBottom: 105,
  },
});

export const SearchScreen = connect(mapStateToProps, mapDispatchToProps)(Search);
