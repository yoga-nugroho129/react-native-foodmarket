import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IcBack} from '../../../assets';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
  container: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 30,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  title: {
    color: '#020202',
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
  },
  subTitle: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
});
