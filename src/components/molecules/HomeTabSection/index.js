/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  useWindowDimensions,
  StyleSheet,
  Animated,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemFoodList} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    scrollEnabled={true}
    indicatorStyle={styles.indicatorStyle}
    style={styles.tabStyle}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused}) => (
      <Text style={styles.tabBarText(focused)}>{route.title}</Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();

  return (
    <Animated.ScrollView>
      <View style={styles.listContainer}>
        <ItemFoodList
          image={FoodDummy1}
          onPress={() => navigation.navigate('DetailFood')}
          type={'homeProduct'}
        />
        <ItemFoodList
          image={FoodDummy2}
          onPress={() => navigation.navigate('DetailFood')}
          type={'homeProduct'}
        />
        <ItemFoodList
          image={FoodDummy3}
          onPress={() => navigation.navigate('DetailFood')}
          type={'homeProduct'}
        />
        <ItemFoodList
          image={FoodDummy4}
          onPress={() => navigation.navigate('DetailFood')}
          type={'homeProduct'}
        />
        <ItemFoodList
          image={FoodDummy1}
          onPress={() => navigation.navigate('DetailFood')}
          type={'homeProduct'}
        />
        <ItemFoodList
          image={FoodDummy3}
          onPress={() => navigation.navigate('DetailFood')}
          type={'homeProduct'}
        />
        <ItemFoodList
          image={FoodDummy4}
          onPress={() => navigation.navigate('DetailFood')}
          type={'homeProduct'}
        />
        <ItemFoodList
          image={FoodDummy1}
          onPress={() => navigation.navigate('DetailFood')}
          type={'homeProduct'}
        />
      </View>
    </Animated.ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();

  return (
    <Animated.ScrollView>
      <View style={styles.listContainer}>
        <ItemFoodList
          image={FoodDummy3}
          onPress={() => navigation.navigate('DetailFood')}
          type={'homeProduct'}
        />
        <ItemFoodList
          image={FoodDummy2}
          onPress={() => navigation.navigate('DetailFood')}
          type={'homeProduct'}
        />
      </View>
    </Animated.ScrollView>
  );
};

const Recommended = () => {
  const navigation = useNavigation();

  return (
    <Animated.ScrollView>
      <View style={styles.listContainer}>
        <ItemFoodList
          image={FoodDummy2}
          onPress={() => navigation.navigate('DetailFood')}
          type={'homeProduct'}
        />
      </View>
    </Animated.ScrollView>
  );
};

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  tabStyle: {
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0,
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  indicatorStyle: {
    backgroundColor: '#020202',
    height: 3,
    width: 0.5,
  },
  tabBarText: focused => ({
    color: focused ? '#020202' : '#8D92A3',
    margin: 5,
    fontFamily: 'Poppins-Medium',
  }),
});
