import { StyleSheet } from 'react-native'

export const stylesHomeScreen = StyleSheet.create({
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
