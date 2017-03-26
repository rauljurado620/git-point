import React, {PropTypes} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

import colors from '../config/colors';

const RepositoryProfile = (
  {
    repository,
    navigation,
  }
) => (
  <View style={styles.container}>
    <View style={styles.profile}>
      <Icon
        containerStyle={styles.icon}
        name={repository.fork ? 'call-split' : 'library-books'}
        size={45}
        color={colors.greyLight}
      />

      <Text style={styles.title}>{repository.name}</Text>
      <Text style={[styles.subtitle, styles.subtitleDescription]}>
        {repository.description}
      </Text>

      {repository.fork &&
        <Text style={[styles.subtitle, styles.subtitleFork]}>

          {repository.parent &&
            <Text>
              <Text>forked from</Text>
              <Text
                style={{fontWeight: 'bold'}}
                onPress={() =>
                  navigation.navigate('Repository', {
                    repository: repository.parent,
                  })}
              >
                {' '}{repository.parent.full_name}
              </Text>
            </Text>
          }

        </Text>}
    </View>

    <View style={styles.details}>

      <View style={styles.unit}>
        <Text style={styles.unitNumber}>
          {repository.stargazers_count}
        </Text>
        <Text style={styles.unitText}>Stars</Text>
      </View>

      <View style={styles.unit}>
        <Text style={styles.unitNumber}>
          {repository.forks}
        </Text>
        <Text style={styles.unitText}>Forks</Text>
      </View>
    </View>
  </View>
);

RepositoryProfile.propTypes = {
  repository: PropTypes.object,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkenContainer: {
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  profile: {
    flex: 2,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontFamily: 'AvenirNext-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    backgroundColor: 'transparent',
  },
  subtitle: {
    color: colors.white,
    fontFamily: 'AvenirNext-Medium',
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'transparent',
  },
  subtitleDescription: {
    textAlign: 'center',
  },
  subtitleFork: {
    marginTop: 20,
    fontSize: 12,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
  },
  unit: {
    flex: 1,
  },
  unitNumber: {
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'AvenirNext-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  unitText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 12,
    fontFamily: 'AvenirNext-Medium',
    backgroundColor: 'transparent',
  },
  icon: {
    paddingBottom: 20,
  },
});

export default RepositoryProfile;
