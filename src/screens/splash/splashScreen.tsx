import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { router } from 'expo-router';
import { styles } from './style';

const Logo = require('../../../assets/splash.png');

export const Splash = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate('/stacks/login');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        source={Logo}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Bem-vindo ao Meu Pet Amoroso 💖</Text>
    </View>
  );
};

