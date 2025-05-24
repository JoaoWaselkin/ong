import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#A97487',
    marginBottom: 25,
    paddingTop: 55, 
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'justify',
    fontFamily: 'Nunito'
  },
  
  scrollViewContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  container: {

    width: '100%',
    minHeight: 400,
    height: 'auto',
    flex: 1,
    backgroundColor: '#FFEDFA',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 60,
    paddingLeft: 20,

  },
  
  card:{
    width: '90%',
    height: 450,
    backgroundColor: '#fff',
    padding: 20,
    margin: 'auto', 
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
    resizeMode: 'cover',
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

    margin: 'auto',
    textAlign: 'justify',
    flex: 1,
    flexDirection: 'row',
    gap: 20
  }
});