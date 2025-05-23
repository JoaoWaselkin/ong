import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  outerContainer: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEDFA'
    
  },

  container: {
    height: 800,
    width: '90%',
    backgroundColor: '#FFEDFA'
  },

  containerCad: {

    height: '90%',
    width: '90%',
    minHeight: 350,
    backgroundColor: '#FFEDFA',
    padding: 20,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 15,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // borderRadius: 10,

  },
  title: {

    fontSize: 20,
    color: '#EC7FA9',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 35,

  },
  subtitle: {

    fontSize: 20,
    fontWeight: 'medium',
    marginBottom: 30,
    color: '#EC7FA9' 
    // color: '#FFDA76',

  },
  button: {

    backgroundColor: '#EC7FA9',
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    width: 100,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'

  },
  containerButtons: {

    width: 110,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
    borderRadius: 20

  },
  secondaryButtonText: {

    fontFamily: 'Nunito',
    fontSize: 14,
    color: 'white',
    fontWeight: 'medium',

  },
  input: {

    width: '85%',
    height: 40,
    borderColor: '#EC7FA9',
    borderWidth: 1,
    borderRadius:20,
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
    // color: 'white'
    // paddingHorizontal: 15,

  }
})