import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Rating from '../Rating';

const ItemFoodList = ({
  image,
  rating,
  items,
  price,
  onPress,
  date,
  status,
  type,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'homeProduct':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>Soup Bumil</Text>
              <Text style={styles.price}>IDR. 80.000</Text>
            </View>
            <Rating />
          </>
        );

      case 'orderSummary':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>Soup Bumil</Text>
              <Text style={styles.price}>IDR. 80.000</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );

      case 'inProgress':
        return (
          <View style={styles.content}>
            <Text style={styles.title}>Soup Bumil</Text>
            <Text style={styles.price}>
              {items} items | IDR. {price}
            </Text>
          </View>
        );

      case 'pastOrders':
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>Soup Bumil</Text>
              <Text style={styles.price}>
                {items} items | IDR. {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              {status === 'canceled' && (
                <Text style={styles.canceled}>Canceled</Text>
              )}
            </View>
          </>
        );
      default:
        break;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.foodContainer}>
        <Image source={image} style={styles.image} />
        {renderContent()}
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
  items: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  date: {
    color: '#8D92A3',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
  canceled: {
    color: '#D9435E',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
});
