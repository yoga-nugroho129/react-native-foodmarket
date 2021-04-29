import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SuccessSignUp as IlSuccessSignUp} from '../../assets/index';
import {Button, Gap} from '../../components';

const SuccessSignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IlSuccessSignUp />
      <Gap height={30} />
      <Text style={styles.title}>Yeay! Completed</Text>
      <Gap height={6} />
      <Text style={styles.subTitle}>Now you are able to order</Text>
      <Text style={styles.subTitle}>some foods as a self-reward</Text>
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

export default SuccessSignUp;

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
