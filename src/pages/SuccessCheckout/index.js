import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SuccessOrder as IlSuccessOrder} from '../../assets/index';
import {Button, Gap} from '../../components';

const SuccessCheckout = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessOrder />
      <Gap height={30} />
      <Text style={styles.title}>You’ve Made Order</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Just stay at home while we are</Text>
      <Text style={styles.subTitle}>preparing your best foods</Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          text={'Order Other Foods'}
          color={'#FFC700'}
          textColor={'#020202'}
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={12} />
      <View style={styles.buttonContainer}>
        <Button
          text={'View My Order'}
          color={'#8D92A3'}
          textColor={'#FFFFFF'}
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessCheckout;

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
