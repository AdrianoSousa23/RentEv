import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import  { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  Modal
} from 'react-native';
import Header from '../components/headerPagamento';

const TelaReservaAntes = ({ navigation, route }) => {
  const [dataInicio, setDataInicio] = useState('');
  const [dataFinal, setDataFinal] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    if (dataInicio && dataFinal) {
      navigation.navigate('confirma');
    } else {
      setModalVisible(true);
    }
  };


  const { numeroCartao } = route.params;

  return (
    <View style={styles.container}>
      <Header />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Preencha todos os campos</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.telaReserva}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 70 }}>
          Reserva
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Data de Início(MM/AA)"
          placeholderTextColor="grey"
          keyboardType="numeric"
          maxLength={4}
          value={dataInicio}
          onChangeText={setDataInicio}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de término(MM/AA)"
          placeholderTextColor="grey"
          keyboardType="numeric"
          maxLength={4}
          value={dataFinal}
          onChangeText={setDataFinal}
        />
        <Text style={styles.text}>Local</Text>
        <Image
          source={require('../assets/localiza.png')}
          style={styles.image1}
          resizeMode="contain"
        />
        <Text style={styles.text}>Método de Pagamento</Text>
        <View style={styles.campoCard}>
          <Text style={styles.textCard}>{numeroCartao}</Text>
          <Image
            source={require('../assets/mastercard.png')}
            style={styles.smallImage}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.botao}>
        <Pressable style={styles.botaoEntrar} onPress={handlePress}>
          <Text style={styles.entrar}>Confirmar reserva</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  telaReserva: {
    padding: 20,
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    height: 56,
    borderColor: '#5A5DBA',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    borderRadius: 14,
  },
  image1: {
    width: '100%',
    height: 56,
    marginBottom: 20,
  },
  campoCard: {
    flexDirection: 'row',
    width: '100%',
    height: 75,
    marginBottom: 20,
    borderColor: '#5A5DBA',
    borderWidth: 2,
    borderRadius: 14,
    alignItems: 'center',
    padding: 10,
  },
  botao: {
    bottom: 10,
    alignSelf: 'center',
  },
  botaoEntrar: {
    backgroundColor: '#5A5DBA',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 14,
  },
  entrar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  textCard: {
    color: 'black',
    fontSize: 16,
    textAlign: 'left',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    marginRight: 25,
  },
  smallImage: {
    width: 45,  
    height: 30, 
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#5A5DBA',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  modalButton: {
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 10,
    elevation: 2,
  },
  modalButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default TelaReservaAntes;
