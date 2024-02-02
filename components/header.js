import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  Image,
  View,
} from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 150,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#5A5DBA',
    paddingHorizontal: 20,
  },
  logo: {
    width: 126,
    height: 50,
  },
  
});