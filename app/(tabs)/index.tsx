import { Image, StyleSheet, View, Text } from 'react-native';

const Logo = require('../../assets/images/dog.png');

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer} >
      <Image source={Logo} style={styles.logo}/>
      <Text style={styles.title}>Ajude um animal</Text>
      <Text style={styles.subtitle}>Encontre um novo melhor amigo para alegrar seus dias!</Text>

    </View>


  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5 
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    
  },
});

