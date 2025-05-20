import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titulo: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#EC7FA9',
  marginBottom: 25,
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'justify'
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingBottom: 80
  },
  container: {
    backgroundColor: '#FFEDFA',
    padding: 20,
    alignItems: 'center',
  },
  card:{
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    alignSelf: 'stretch',
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  logo: {
    width: 120,
    height: 120,
  },
  section: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  image: {
    width: 'auto',
    height: 180,
    borderRadius: 7,
    marginBottom: 20,
    marginTop: 10
  },
  text: {
    fontSize: 15,
    flex: 1,
    fontFamily: 'nunito',
    color: '#A97487',
    textAlign: 'justify',
    fontWeight: 'regular'
  },
  containerButtons: {
    textAlign: 'justify',
    flex: 1,
    flexDirection: 'row',
    gap: 30
  }
});