import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FFEDFA',
},
scrollContent: {
    flexGrow: 1,
    alignItems: 'center', 
    paddingBottom: 20,
    paddingHorizontal: 20,
},
image: {
    width: 385,
    height: 250,
    borderRadius: 10,
    marginVertical: 15,
},

titulo: {
    color: '#EC7FA9',
    marginTop: 60,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    alignSelf: 'stretch',
    fontFamily: 'nunito',
},
name: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#EC7FA9',
  textAlign: 'center',
  marginBottom: 8,
  fontFamily: 'nunito',
},

descricao: {
  fontSize: 16,
  color: '#A97487',
  textAlign: 'left',
  marginBottom: 15,
  fontFamily: 'nunito',
},
infoGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
},

infoItem: {
  width: '48%',
  marginBottom: 10,
},

label: {
  fontWeight: 'bold',
  color: '#EC7FA9',
  fontSize: 15,
  fontFamily: 'nunito',
},

value: {
  color: '#5C5C5C',
  fontSize: 15,
  fontFamily: 'nunito',
},
caracteristicas: {
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
caracteristicasAnimal: {
    paddingVertical: 5,
    color: '#E69DB8',
    fontWeight: 'medium',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'nunito',
}});