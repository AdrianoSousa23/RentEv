import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import Header from '../components/CarroTesla';

const TelaTesla = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.telaTesla}>
        <Image
          source={require('../assets/teslaInfo.png')}
          style={[styles.imageInfo, styles.image1]}
          resizeMode="contain"
        />
        <Text style={styles.text}>Especificações</Text>
        <Image
          source={require('../assets/teslaEsp.png')}
          style={[styles.imageInfo,styles.image2]}
          resizeMode="contain"
        />
      </View>
      <View style={styles.botao}>
        <Pressable style={styles.botaoEntrar} onPress={() => navigation.navigate('pagamento')}>
          <Text style={styles.entrar}>Reserve | R$ 500/Dia</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5056ED',
  },
  telaTesla: {
    padding: 20,
  },
  imageInfo: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  botao: {
    position: 'absolute',
    bottom: 20, 
    alignSelf: 'center',
  },
  image1:{
    width: 357, 
    height: 195,
  },
  image2:{
    width: 357, 
    height: 195,
  },
  botaoEntrar: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 32, 
  },
  entrar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default TelaTesla;
