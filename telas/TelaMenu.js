import React, { useState } from 'react';
import {
 StyleSheet,
 TextInput,
 Image,
 View,
 Text,
 Pressable,
} from 'react-native';
import Header from '../components/header';

const TelaMenu = ({ navigation }) => {
 const [teslaVisible, setTeslaVisible] = useState(true);
 const [nissanVisible, setNissanVisible] = useState(true);

 const handleTeslaPress = () => {
    setTeslaVisible((prevState) => !prevState);
    setNissanVisible(true);
 };

 const handleNissanPress = () => {
    setNissanVisible((prevState) => !prevState);
    setTeslaVisible(true);
 };

 return (
    <View style={styles.container}>
      <Header />
      <View style={styles.telaMenu}>
        <Text style={styles.text}>Marcas</Text>

        <View style={styles.imageContainer}>
          <Pressable style={styles.pressableImageGroup1} onPress={handleNissanPress}>
            <Image
              source={require('../assets/TeslaLogo1.png')}
              style={styles.imageMarcas}
              resizeMode="contain"
            />
          </Pressable>
          <Pressable style={styles.pressableImageGroup1} onPress={handleTeslaPress}>
            <Image
              source={require('../assets/NissanLogo1.png')}
              style={styles.imageMarcas}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        <Text style={styles.text}>Carros Disponíveis</Text>
        <View>
          {nissanVisible && (
            <Pressable style={styles.pressableImageGroup2} onPress={() => navigation.navigate('leaf')}>
              <Image
                source={require('../assets/LeafPainel.png')}
                style={styles.imageCarrosPainel}
                resizeMode="contain"
              />
            </Pressable>
          )}
          {teslaVisible && (
            <Pressable style={styles.pressableImageGroup2} onPress={() => navigation.navigate('tesla')}>
              <Image
                source={require('../assets/M3Painel.png')}
                style={styles.imageCarrosPainel}
                resizeMode="contain"
              />
            </Pressable>
          )}
        </View>
      </View>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: 'white',
 },

 telaMenu: {
    padding: 20,
 },
 text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
 },
 imageContainer: {
    flexDirection: 'row',
 },
 pressableImageGroup1: {
    paddingHorizontal: 10,
    aspectRatio: 1,
    marginBottom: 10,
    overflow: 'hidden',
 },
 pressableImageGroup2: {
    flexDirection: 'row',
    marginBottom: 15,
 },
 imageMarcas: {
    flex: 1,
    width: 64,
    height: 55,
 },
 imageCarrosPainel: {
    flex: 1,
    width: 343, 
    height: 206, 
 },
});

export default TelaMenu;