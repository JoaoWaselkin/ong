import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollViewContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
    container: {
    flex: 1,
    backgroundColor: '#FFEDFA',
    
  },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexGrow: 1,
        paddingBottom: 20
    },
    contentContainerTitulo: {
        marginBottom: 20,
        width: '100%',
        alignItems: 'center'
    },
    pageTitulo: {
        fontFamily: 'Nunito',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#A97487'
    },
    pageSubtitulo: {
        fontFamily: 'Nunito',
        fontSize: 17,
        color: '#A97487',
        width: '100%',
        flexWrap: 'wrap',
        textAlign: 'center'
    },
    card: {
        width: '48%',  
        minHeight: 250,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 15, 
        alignItems: 'center',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
    },
    cardImage: {
        width: 'auto',
        height: 100,
        resizeMode: 'cover',
        borderRadius: 8, 
    },
    cardTitulo: {
        fontFamily: 'Nunito',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#A97487'
    },

    cardTexto: {
    fontFamily: 'Nunito',
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },

}) 