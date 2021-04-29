import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInputGroup} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.page}>
        <Header
          title={'Sign Up'}
          subTitle={'Register and eat'}
          onBack={() => navigation.navigate('SignIn')}
        />
        <View style={styles.formContainer}>
          <View style={styles.photo}>
            <View style={styles.borderPhoto}>
              <View style={styles.photoContainer}>
                <Text style={styles.addPhoto}>Add Photo</Text>
              </View>
            </View>
          </View>
          <TextInputGroup
            label={'Full Name'}
            placeholder={'Type your full name'}
          />
          <Gap height={16} />
          <TextInputGroup
            label={'Email Address'}
            placeholder={'Type your email address'}
          />
          <Gap height={16} />
          <TextInputGroup
            label={'Password'}
            placeholder={'Type your password'}
          />
          <Gap height={24} />
          <Button
            text={'Continue'}
            color={'#FFC700'}
            textColor={'#020202'}
            onPress={() => navigation.navigate('SignUpAddress')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 45,
  },
  photo: {
    marginTop: 26,
    marginBottom: 16,
    alignItems: 'center',
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
    width: 110,
    height: 110,
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    color: '#8D92A3',
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    fontSize: 14,
    padding: 24,
  },
  scroll: {
    flexGrow: 1,
  },
});
