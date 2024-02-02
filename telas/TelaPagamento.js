import * as React from 'react';
import  { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  Modal,
  Button
} from 'react-native';
import Header from '../components/headerPagamento';

const TelaPagamento = ({ navigation }) => {
  const [nomeProprietario, setNomeProprietario] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [codSeguranca, setCodSeguranca] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    if (nomeProprietario && numeroCartao && dataValidade && codSeguranca) {
      navigation.navigate('reserva', { numeroCartao });
    } else {
      setModalVisible(true);
    }
  };

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

      <View style={styles.TelaCartao}>
        <Image
          source={require('../assets/cartanzinho.png')}
          style={styles.imageCartao}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          placeholder="Nome do Proprietário"
          placeholderTextColor="grey"
          value={nomeProprietario}
          onChangeText={setNomeProprietario}
        />
        <TextInput
          style={styles.input}
          placeholder="Número do cartão"
          placeholderTextColor="grey"
          keyboardType="numeric"
          maxLength={16}
          value={numeroCartao}
          onChangeText={setNumeroCartao}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de validade (MM/AA)"
          placeholderTextColor="grey"
          keyboardType="numeric"
          maxLength={4} 
          value={dataValidade}
          onChangeText={setDataValidade}
        />
        <TextInput
          style={styles.input}
          placeholder="Cód.Segurança"
          placeholderTextColor="grey"
          keyboardType="numeric"
          maxLength={3}
          value={codSeguranca}
          onChangeText={setCodSeguranca}
        />
      </View>
      <View style={styles.botao}>
        <Pressable style={styles.botaoEntrar} onPress={handlePress}>
          <Text style={styles.entrar}>Confirmar</Text>
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
  TelaCartao: {
    padding: 20,
    flex: 1,
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
  imageCartao: {
    width: '100%',
    height: 333,
    marginBottom: 10,
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

export default TelaPagamento;
