import React from 'react';
import { TextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
}

const CustomInput: React.FC<CustomTextInputProps> = ({ label, ...rest }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholderTextColor="#888"
        {...rest}
      />
    </>
  );
};

const styles = StyleSheet.create({

  input: {
    width: '85%',
    height: 40,
    borderColor: '#EC7FA9',
    borderWidth: 1,
    borderRadius:20,
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
});

export default CustomInput;
