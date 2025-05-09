import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  eventName: {
    color: '#131016',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#131016',
    fontSize: 14,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#E1E1E6',
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    marginRight: 5,
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
    backgroundColor: '#00882c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 42,
  },
  listEmptyText: {
    color: '#6b6b6b',
    textAlign: 'center',
    fontSize: 14,
  },
});
