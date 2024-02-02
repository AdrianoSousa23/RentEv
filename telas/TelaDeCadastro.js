import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  Pressable,
  Text,
  StyleSheet,
  TextInput,
  View,
  Image,
  Modal
} from 'react-native';

const TelaDeCadastro = ({ navigation }) => {
  const [novoEmail, setNovoEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();
  const { setUserTrue, setSenhaTrue } = route.params;

  const handlePress = () => {
    if (novoEmail && novaSenha) {
      setUserTrue(novoEmail);
      setSenhaTrue(novaSenha);

      navigation.goBack();
    } else {
      setModalVisible(true);
    }
  };

  return (
    
    <View style={styles.container}>

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Preencha os campos</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.frame}>
        <Pressable style={styles.entrarTroca} onPress={() => navigation.navigate('login')}>
          <Text style={styles.entrarTexto}>Entrar</Text>
        </Pressable>
        <Pressable style={styles.cadastroTroca} onPress={() => {}}>
          <Text style={styles.cadastroTexto}>Cadastro</Text>
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Nome Completo" />
        <TextInput style={styles.input} placeholder="CPF" />
        <TextInput style={styles.input} placeholder="Email" value={novoEmail}
        onChangeText={(text) => setNovoEmail(text)}/>
        <TextInput style={styles.input} placeholder="Senha" value={novaSenha}
        secureTextEntry={true}
        onChangeText={(text) => setNovaSenha(text)}/>
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
    backgroundColor:'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    height: 134,
    width: 327,
    marginTop: 70,
    marginBottom: 20,
  },
  frame: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  entrarTroca: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10, 
    marginRight: 20,
  },
  cadastroTroca: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  entrarTexto: {
    fontSize: 18,
    textShadowColor: 'black',
    textShadowRadius: 2,
  },
  cadastroTexto: {
    fontSize: 18,
    color: "#faff00",
    textShadowColor: 'black',
    textShadowRadius: 2,
  },
  inputContainer:{
    width: '100%',
    alignItems: 'center',
    marginVertical:'20%',
  },
  input: {
    width: '100%',
    height: 61,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 32,
  },
  botao:{
    flex:1,
    justifyContent: 'flex-end'
  },
  botaoEntrar: {
    backgroundColor: '#5056ed', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 32,
  },
  entrar: {
    color: 'white',
    fontSize: 18,
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

export default TelaDeCadastro;