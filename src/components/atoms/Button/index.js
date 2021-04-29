import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({text, color, textColor, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    borderRadius: 8,
    paddingVertical: 12,
  }),
  text: textColor => ({
    color: textColor,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  }),
});
