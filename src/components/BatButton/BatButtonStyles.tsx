import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: 'black',
    borderRadius: 4,
    elevation: 3,
    marginTop: 5
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#e5bf3c'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 35,
  },
  input: {
      backgroundColor: '#E5BF3C',
      width: '18%',
      color: 'black',
      fontSize: 20,
      height: 40,              
      textAlign: 'center',
  },
  label: {
      color: 'white',
      fontSize: 16,
      height: 40,
      padding: 10,
      textAlign: 'left'
  },
  warning_off: {
      backgroundColor: '',
      flex: 0,
      marginTop: 10,
      borderRadius: 5,
  },
  warning_on: {
      backgroundColor: 'red',
      flex: 1,
      marginTop: 10,
      borderRadius: 5,
  }
});