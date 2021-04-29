import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInputGroup} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Sign In'} subTitle={'Find your best ever meal'} />
      <View style={styles.formContainer}>
        <TextInputGroup
          label={'Email Address'}
          placeholder={'Type your email address'}
        />
        <Gap height={16} />
        <TextInputGroup label={'Password'} placeholder={'Type your password'} />
        <Gap height={24} />
        <Button
          text={'Sign In'}
          color={'#FFC700'}
          textColor={'#020202'}
          onPress={() => navigation.navigate('MainApp')}
        />
        <Gap height={12} />
        <Button
          text={'Create New Account'}
          color={'#8D92A3'}
          textColor={'#FFFFFF'}
          onPress={() => navigation.navigate('Testing')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 26,
  },
});
