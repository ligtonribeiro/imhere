import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    color: '#FFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: '#ff5733',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
