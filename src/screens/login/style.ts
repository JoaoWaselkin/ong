import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#BE5985'
  },
  scrollContainer: {
  flexGrow: 1,
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
    // borderRadius: 10,
  },
  subtitle: {
    fontSize: 14,
    // color: '#FFB8E0',
    color: '#EC7FA9',
    fontWeight: 'medium',
    paddingBottom: 15,
    textAlign: 'center',
    fontFamily: 'nunito',
  },
  title: {
    fontSize: 24,
    fontWeight: 'medium',
    marginBottom: 30,
    color: '#EC7FA9' ,
    fontFamily: 'nunitoBold',
    // color: '#FFDA76',
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
    fontFamily: 'nunito',

  },

})