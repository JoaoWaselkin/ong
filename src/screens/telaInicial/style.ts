import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
        backgroundColor: '#FFEDFA',
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    minWidth: '9%',
    top: 20,
    left: 20,
    zIndex: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  section: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 180,
    borderRadius: 7,
    marginBottom: 20,
    marginTop: 10
  },
  text: {
    fontSize: 15,
    flex: 1,
    fontFamily: 'arial,sans-serif',
    color: '#E69DB8',
    textAlign: 'justify',
    fontWeight: 'bold'
  },
  viewMoreButton: {
    backgroundColor: '#EC7FA9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
    margin: 10,
  },
  viewMoreButtonText: {
    textAlign: 'center',
    width: 120,
    height: 30,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerButtons: {
    textAlign: 'justify',
    flex: 1,
    flexDirection: 'row'
  }
});