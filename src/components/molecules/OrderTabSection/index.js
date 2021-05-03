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
// import {useNavigation} from '@react-navigation/native';

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

const PastOrders = () => {
  return (
    <Animated.ScrollView>
      <View style={styles.listContainer}>
        <ItemFoodList
          type="pastOrders"
          price={'220.000'}
          items={2}
          image={FoodDummy1}
          date={'Jun 12, 4:00'}
        />
        <ItemFoodList
          type="pastOrders"
          price={'320.000'}
          items={3}
          image={FoodDummy2}
          date={'Jun 16, 5:00'}
          status="canceled"
        />
        <ItemFoodList
          type="pastOrders"
          price={'120.000'}
          items={1}
          image={FoodDummy3}
          date={'Jun 19, 9:00'}
        />
        <ItemFoodList
          type="pastOrders"
          price={'420.000'}
          items={4}
          image={FoodDummy4}
          date={'Jun 22, 4:30'}
        />
      </View>
    </Animated.ScrollView>
  );
};

const InProgress = () => {
  // const navigation = useNavigation();

  return (
    <Animated.ScrollView>
      <View style={styles.listContainer}>
        <ItemFoodList
          image={FoodDummy3}
          type="inProgress"
          price={'128.000'}
          items={2}
        />
        <ItemFoodList
          image={FoodDummy2}
          type="inProgress"
          price={'128.000'}
          items={2}
        />
      </View>
    </Animated.ScrollView>
  );
};

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
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

export default OrderTabSection;

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
