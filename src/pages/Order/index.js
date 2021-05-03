import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {EmptyOrder, Gap, Header, OrderTabSection} from '../../components';

const Order = () => {
  const [empty] = useState(false);

  return (
    <View style={styles.page}>
      {empty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title={'Your Orders'} subTitle={'Wait for the best meal'} />
          <Gap height={24} />
          <OrderTabSection />
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {flex: 1},
  content: {flex: 1},
});
