import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Button, Gap, Header, Select, TextInputGroup} from '../../components';

const SignUpAddress = ({navigation}) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.page}>
        <Header
          title={'Address'}
          subTitle={"Make sure it's valid"}
          onBack={() => navigation.navigate('SignUp')}
        />
        <View style={styles.formContainer}>
          <TextInputGroup
            label={'Phone No.'}
            placeholder={'Type your phone number'}
          />
          <Gap height={16} />
          <TextInputGroup label={'Address'} placeholder={'Type your address'} />
          <Gap height={16} />
          <TextInputGroup
            label={'House No.'}
            placeholder={'Type your house number'}
          />
          <Gap height={16} />
          <TextInputGroup
            label={'Password'}
            placeholder={'Type your password'}
          />
          <Gap height={16} />
          <Select label={'City'} />
          <Gap height={24} />
          <Button
            text={'Sign Up Now'}
            color={'#FFC700'}
            textColor={'#020202'}
            onPress={() => navigation.navigate('SuccessSignUp')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
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
