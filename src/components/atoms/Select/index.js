import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={this.state.language}
        // onValueChange={(itemValue, itemIndex) =>
        //   this.setState({language: itemValue})
        // }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

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
  },
});
