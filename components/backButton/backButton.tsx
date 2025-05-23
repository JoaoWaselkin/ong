// BackButton.js
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 


const BackButton = () => {
  const router = useRouter();

  return (
    <Pressable style={styles.backButton} onPress={() => router.back()}>
      <FontAwesome style={{ bottom: 2}} name="angle-left" size={24} color="#A97487" />
      <Text style={styles.backText}>Voltar</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 87,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    top: 20,
    left: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: 'rgba(250, 220, 232, 0.4)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

  },
  backText: {
    marginLeft: 7,
    fontSize: 16,
    color: '#A97487',
    fontFamily: 'nunito',
  },
});

export default BackButton;
