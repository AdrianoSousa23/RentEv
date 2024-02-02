import * as React from 'react';
import { View, StyleSheet, Image , Pressable, Text} from 'react-native';

const TelaConfirma = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/confirma.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.botao}>
        <Pressable style={styles.botaoEntrar} onPress={() => navigation.navigate('menu')}>
          <Text style={styles.entrar}>Confirmar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4246B1',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 608, 
  },
  botao: {
    bottom: 10,
    alignSelf: 'center',
  },
  botaoEntrar: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  entrar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default TelaConfirma;
