import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50
  },
  subtitle: {
    fontSize: 16,
    color: '#EC7FA9',
    fontWeight: 'medium',
    paddingBottom: 15,
    textAlign: 'center',
    fontFamily: 'nunito',
  },
  title: {
    fontSize: 20,
    fontWeight: 'medium',
    marginBottom: 30,
    color: '#EC7FA9',
    fontFamily: 'nunitoBold',
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

  },
  infoButton: {
    padding: 8
  },
  secondaryButtonText: {
    fontSize: 14,
    color: '#BE5985',
    fontWeight: 'medium',
    fontFamily: 'nunito',

  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'nunito',
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
    fontFamily: 'nunito',
  }
})