import * as React from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 80,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#5A5DBA',
    paddingHorizontal: 20,
  },
  
});