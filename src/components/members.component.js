import React from "react";
import FastImage from "react-native-fast-image";

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight
} from "react-native";

import config from "config";

type Props = {
  title: string,
  members: Array,
  containerStyle: Object,
  smallTitle: string,
  navigation: Object
};

export const MembersList = ({
  title,
  members,
  containerStyle,
  smallTitle,
  navigation
}: Props) => (
  <View style={[styles.container, containerStyle && containerStyle]}>
    <Text style={smallTitle ? styles.sectionTitleSmall : styles.sectionTitle}>
      {title}
    </Text>

    <FlatList
      data={members}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableHighlight
          onPress={() =>
            navigation.navigate("Profile", {
              user: item
            })}
          underlayColor="transparent"
          style={styles.avatarContainer}
        >
          <View style={styles.avatarContainer}>
            <FastImage
              style={styles.avatar}
              source={{
                uri: item.avatar_url,
                priority: FastImage.priority.high
              }}
            />
          </View>
        </TouchableHighlight>
      )}
      keyExtractor={item => item.id}
      horizontal={true}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 15
  },
  avatarContainer: {
    marginRight: 5
  },
  avatar: {
    backgroundColor: config.colors.greyLight,
    borderRadius: 15,
    height: 30,
    width: 30
  },
  sectionTitle: {
    color: config.colors.black,
    fontFamily: "AvenirNext-Bold",
    marginBottom: 10
  },
  sectionTitleSmall: {
    color: config.colors.primarydark,
    fontFamily: "AvenirNext-DemiBold",
    marginBottom: 10
  }
});
