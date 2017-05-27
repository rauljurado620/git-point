import React, {PropTypes} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List, ListItem, Button} from 'react-native-elements';

import config from '@config';

const SectionList = (
  {
    title,
    showButton,
    buttonTitle,
    buttonAction,
    noOuterBorders,
    noItems,
    noItemsMessage,
    children,
  }
) => {
  const listDisplay = noItems ? <ListItem title={noItemsMessage} titleStyle={styles.listTitle} hideChevron/> : children;

  return (
    <View style={styles.section}>
      <View style={styles.topHeader}>
        <Text style={styles.sectionTitle}>{title.toUpperCase()}</Text>

        {showButton &&
          <Button
            title={buttonTitle}
            fontFamily="AvenirNext-DemiBold"
            fontSize={13}
            color={showButton ? config.colors.primarydark : config.colors.white}
            buttonStyle={styles.button}
            onPress={buttonAction}
          />}
      </View>
      <List containerStyle={[styles.list, noOuterBorders && styles.noOuterBorders]}>
        {listDisplay}
      </List>
    </View>
  )
};

SectionList.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  showButton: PropTypes.bool,
  showActionButton: PropTypes.bool,
  buttonTitle: PropTypes.string,
  noOuterBorders: PropTypes.bool,
  noItems: PropTypes.bool,
  noItemsMessage: PropTypes.string,
  buttonAction: PropTypes.func,
};

const styles = StyleSheet.create({
  section: {
    marginTop: 15,
  },
  topHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: config.colors.black,
    padding: 15,
    fontFamily: 'AvenirNext-Bold',
  },
  listTitle: {
    color: config.colors.black,
    fontFamily: 'AvenirNext-Medium',
  },
  button: {
    backgroundColor: config.colors.white,
    borderColor: config.colors.primarydark,
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 0,
  },
  list: {
    marginTop: 0,
  },
  noOuterBorders: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  }
});

export default SectionList;
