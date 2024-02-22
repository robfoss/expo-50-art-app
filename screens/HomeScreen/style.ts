import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    marginTop: 40,
    fontSize: 36,
    fontFamily: 'Poppins_500Medium',
    color: '#fff',
    marginBottom: 20,
  },
  boldTitle: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 36,
  },
  imagesContainer: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 26,
  },
  topContainer: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  smallImage: {
    width: '48%',
    borderRadius: 7
  },
  bigImage: {
    width: '96%',
    height: 200,
    borderRadius: 8,
    marginTop: 15,
    alignSelf: 'center',
  },
  introText: {
    fontSize: 18,
    marginTop: 25,
    fontFamily: 'Poppins_500Medium',
    color: '#fff',
  },
  loginButton: {
    width: 250,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: .54,
    shadowRadius: 20,
    elevation: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  loginText: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#fff', 
    backgroundColor: 'transparent',
  }
});

