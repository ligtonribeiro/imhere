import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  function handlarParticipantAdd() {
    console.log('Adicionar participante');
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        sexta-feira, 09 de maio 2025
      </Text>
      
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6b6b6b'}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handlarParticipantAdd} 
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}