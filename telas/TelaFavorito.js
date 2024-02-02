import { Text, View, StyleSheet , Image } from 'react-native';
import React, { useState } from 'react';
import Header from '../components/header2';

const TelaFavoritos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style = {styles.telaFav}>
        <Text style={styles.text}>Favoritos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  telaFav: {
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default TelaFavoritos;