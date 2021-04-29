import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';

const Rating = () => {
  return (
    <View>
      <View style={styles.rating}>
        <View style={styles.starContainer}>
          <IcStarOn />
          <IcStarOn />
          <IcStarOn />
          <IcStarOn />
          <IcStarOff />
        </View>
        <Text style={styles.ratingText}>4.0</Text>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    marginLeft: 4,
  },
});
