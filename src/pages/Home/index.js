/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1}}>
        <HomeProfile />
        <Gap height={24} />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <FoodCard image={FoodDummy1} />
              <FoodCard image={FoodDummy2} />
              <FoodCard image={FoodDummy3} />
              <FoodCard image={FoodDummy4} />
            </View>
          </ScrollView>
        </View>
        <Gap height={24} />
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  foodCardContainer: {
    flexDirection: 'row',
    marginLeft: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
