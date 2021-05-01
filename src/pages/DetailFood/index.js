import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FoodDummy6, IcBackWhite} from '../../assets';
import {Button, Counter, Gap, Rating} from '../../components';

const DetailFood = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy6} style={styles.background}>
        <TouchableOpacity
          style={styles.back}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Home')}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View style={styles.mainContent}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Soup Bumil</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <Gap height={12} />
          <Text style={styles.description}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Gap height={12} />
          <Text style={styles.ingredient}>Ingeredients:</Text>
          <Text style={styles.ingredientList}>
            Seledri, telur, blueberry, madu.
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.priceTotal}>IDR 12.289.000</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              text={'Order Now'}
              color={'#FFC700'}
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailFood;

const styles = StyleSheet.create({
  page: {flex: 1},
  background: {
    height: 300,
    resizeMode: 'cover',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  back: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -60,
  },
  mainContent: {flex: 1},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#020202',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  description: {
    color: '#8D92A3',
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  ingredient: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  ingredientList: {
    color: '#8D92A3',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  priceContainer: {flex: 1},
  labelTotal: {
    color: '#8D92A3',
    fontSize: 13,
    fontFamily: 'Poppins-Light',
  },
  priceTotal: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  buttonContainer: {
    width: 160,
  },
});
