import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, (disabled || loading) && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      <Text style={styles.buttonText}>
        {loading ? 'Entrando...' : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 150,
    backgroundColor: '#EC7FA9',
    paddingVertical: 12,
    paddingHorizontal: 34,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 15
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'nunito',
  },
});

export default CustomButton;
