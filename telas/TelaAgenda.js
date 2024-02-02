import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/header2';

const TelaAgenda = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style = {styles.telaFav}>
        <Text style={styles.text}>Agendamento</Text>
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

export default TelaAgenda;
