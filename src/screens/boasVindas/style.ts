import { StyleSheet } from 'react-native'

export const stylesHomeScreen = StyleSheet.create({
    Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFEDFA',
    },

    logo: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },

    textoLogin:{
      marginTop: 80,
      fontSize: 15,
      fontWeight: 'bold',
      color: '#EC7FA9',
    }
  });
