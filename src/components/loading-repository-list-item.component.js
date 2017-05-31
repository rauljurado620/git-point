import React, { Component } from "react";
import { StyleSheet, Animated, View } from "react-native";
import config from "config";

import { loadingAnimation } from "utils";

export class LoadingRepositoryListItem extends Component {
  constructor() {
    super();
    this.state = {
      fadeAnimValue: new Animated.Value(0)
    };
  }

  componentDidMount() {
    loadingAnimation(this.state.fadeAnimValue).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Animated.View
            style={[styles.textBarTitle, { opacity: this.state.fadeAnimValue }]}
          />

          <Animated.View
            style={[styles.textBarLine1, { opacity: this.state.fadeAnimValue }]}
          />

          <Animated.View
            style={[styles.textBarLine2, { opacity: this.state.fadeAnimValue }]}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    height: 100,
    borderBottomColor: "#ededed",
    borderBottomWidth: 1,
    backgroundColor: "transparent"
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10
  },
  textBarTitle: {
    height: 7,
    width: 100,
    backgroundColor: config.colors.greyDarkest,
    marginBottom: 10
  },
  textBarLine1: {
    height: 7,
    width: 250,
    backgroundColor: config.colors.grey,
    marginBottom: 10
  },
  textBarLine2: {
    height: 7,
    width: 80,
    backgroundColor: config.colors.grey
  }
});
