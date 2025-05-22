import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#BE5985'
  },
  container: {
    height: '100%',
    width: '100%',
    minHeight: 350,
    backgroundColor: '#FFEDFA',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
    width: '85%',
    alignItems: 'center'
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    gap: 20,
    // width: '60%',

  },
  infoButton: {
    padding: 8
  },
  secondaryButtonText: {
    fontSize: 14,
    color: '#BE5985',
    fontWeight: 'medium',

  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
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