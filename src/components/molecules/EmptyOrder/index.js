import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EmptyOrder as IlEmptyOrder} from '../../../assets';
import {Button, Gap} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const EmptyOrder = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <IlEmptyOrder />
      <Gap height={30} />
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Seems like you have not</Text>
      <Text style={styles.subTitle}>ordered any food yet</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text={'Find Foods'}
          color={'#FFC700'}
          textColor={'#020202'}
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#020202',
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    fontSize: 14,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
});
