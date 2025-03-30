import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BE5985'
  },
  container: {
    height: '60%',
    width: '35%',
    minHeight: 350,
    backgroundColor: '#FFEDFA',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  
  },
  logo: {
    width: 120,
    height: 120
  },

  subtitle:{
    fontSize: 17,
    color: '#FFB8E0',
    fontWeight: 'bold',
    paddingBottom: 30
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#FFB8E0' 
  },
  button: {
    backgroundColor: '#b5b5b5',
    borderRadius: 10,
    marginTop: 20,
    padding: 12,
    width: '25%',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    width: '55%',
    height: 45,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#222',
    color: 'white'
  }
})