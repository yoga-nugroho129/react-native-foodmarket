import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Gap} from '../../components';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.page}>
      <Logo />
      <Gap height={30} />
      <Text style={styles.title}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFC700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap: {
    height: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
  },
});
