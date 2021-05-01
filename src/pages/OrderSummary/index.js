import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {FoodDummy3} from '../../assets';
import {Button, Gap, Header, ItemFoodList} from '../../components';
import ItemValue from '../../components/molecules/ItemValue';

const OrderSummary = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title={'Payment'}
        subTitle={'You deserve better meal'}
        onBack={() => navigation.navigate('DetailFood')}
      />
      <Gap height={24} />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemFoodList image={FoodDummy3} items={4} />
        <Gap height={16} />
        <Text style={styles.label}>Details Transactions</Text>
        <ItemValue label={'Cherry Healthy'} value={'IDR 18.390.000'} />
        <ItemValue label={'Driver'} value={'IDR 50.000'} />
        <ItemValue label={'Tax 10%'} value={'IDR 1.839.000'} />
        <ItemValue
          label={'Total Price'}
          value={'IDR 18.490.000'}
          valueColor={'#1ABC9C'}
          fontFamily={'Poppins-Medium'}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver To:</Text>
        <ItemValue label={'Name'} value={'M. Danish A.'} />
        <ItemValue label={'Phone'} value={'080908099080'} />
        <ItemValue label={'Address'} value={'Sukunan'} />
        <ItemValue label={'House No.'} value={'A719'} />
        <ItemValue label={'City'} value={'Sleman'} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text={'Checkout Now'}
          color={'#FFC700'}
          textColor={'#020202'}
          onPress={() => navigation.navigate('SuccessCheckout')}
        />
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  label: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 8,
  },
  buttonContainer: {
    marginBottom: 26,
    paddingHorizontal: 24,
  },
});
