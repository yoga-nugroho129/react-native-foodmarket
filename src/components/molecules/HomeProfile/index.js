import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ProfileDummy} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.homeProfileContainer}>
      <View>
        <Text style={styles.title}>FoodMarket</Text>
        <Text style={styles.welcoming}>Let’s get some foods</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profile} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  homeProfileContainer: {
    backgroundColor: '#FFFFFF',
    paddingTop: 32,
    paddingBottom: 24,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
  welcoming: {
    color: '#8D92A3',
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});
