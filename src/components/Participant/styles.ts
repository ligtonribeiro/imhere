import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E1E6',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
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
