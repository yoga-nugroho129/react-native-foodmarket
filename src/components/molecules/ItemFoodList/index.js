import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Rating from '../Rating';
import {useNavigation} from '@react-navigation/native';

const ItemFoodList = ({image}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailFood')}
      activeOpacity={0.7}>
      <View style={styles.foodContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Soup Bumil</Text>
          <Text style={styles.price}>IDR. 80.000</Text>
        </View>
        <Rating />
      </View>
    </TouchableOpacity>
  );
};

export default ItemFoodList;

const styles = StyleSheet.create({
  foodContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  price: {
    color: '#8D92A3',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
});
