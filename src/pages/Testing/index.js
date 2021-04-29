/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, HomeTabSection} from '../../components';

const Testing = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'lime', flexGrow: 1}}>
      <View style={styles.page}>
        <HomeTabSection />
        <Button
          text={'Back'}
          onPress={() => navigation.navigate('SignIn')}
          color={'salmon'}
          textColor={'white'}
        />
      </View>
    </ScrollView>
  );
};

export default Testing;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
