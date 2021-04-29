import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const TextInputGroup = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInputGroup;

const styles = StyleSheet.create({
  label: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  input: {
    borderRadius: 8,
    borderColor: '#020202',
    borderWidth: 1,
    fontSize: 14,
    padding: 10,
  },
});
