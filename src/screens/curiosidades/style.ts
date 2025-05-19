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
    fontFamily: 'nunito',
    color: '#A97487',
    textAlign: 'justify',
    fontWeight: 'regular'
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
    fontFamily: 'nunito',
  },
  containerButtons: {
    textAlign: 'justify',
    flex: 1,
    flexDirection: 'row',
    gap: 30
  }
});