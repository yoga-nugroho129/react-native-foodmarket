import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Rating from '../Rating';

const FooCard = ({image}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Cherry Healhty</Text>
        <Rating />
      </View>
    </View>
  );
};

export default FooCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    width: 200,
    shadowColor: '#000000',
    shadowOffset: {height: 7, width: 0},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    marginRight: 24,
  },
  image: {
    height: 140,
    width: 200,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },

  content: {
    padding: 12,
  },
});
