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
    width: 250,
    height: 250,
    borderRadius: 10,
    marginVertical: 15,
},
titulo: {
    color: '#EC7FA9',
    marginVertical: 25,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    alignSelf: 'stretch',
},
name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#E69DB8',
    marginVertical: 5,
},
descricao: {
    fontSize: 15,
    textAlign: 'center',
    color: '#E69DB8',
    padding: 10,
    alignSelf: 'stretch', 
},
caracteristicas: {
    marginVertical: 10,
    alignSelf: 'stretch',
    alignItems: 'flex-start', 
},
caracteristicasAnimal: {
    paddingVertical: 5,
    color: '#E69DB8',
    fontWeight: 'medium',
    fontSize: 16,
    textAlign: 'left', // Alinha o texto de cada característica à esquerda
},
button: {
    backgroundColor: '#EC7FA9',
    borderRadius: 20,
    marginTop: 20,
    padding: 10,
    width: '85%',
    alignItems: 'center',
},
botaoAdoteme: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
},
});