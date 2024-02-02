import React, { useState } from 'react';
import { StyleSheet, Image, View, Pressable, Text } from 'react-native';

export default function Leaf() {
  const [imagemAtual, setImagemAtual] = useState(1); 

  const handlePress = () => {
    if (imagemAtual === 1) {
      setImagemAtual(2);
    } else {
      setImagemAtual(1);
    }
  };


  return (
    <View style={styles.headerContainer}>
      <View style={styles.centerContent}>
        <Image
          source={require('../assets/leaf.png')}
          style={styles.centerImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.frame}>
        <View style={styles.leftContainer}>
          <Text style={styles.textBelowImage}>Nissan Leaf</Text>
        </View>
        <Pressable style={styles.pressableRight} onPress={handlePress}>
          <Image
            source={imagemAtual === 1 ? require('../assets/FavIcon.png') : require('../assets/FavIconPre.png')}
            style={styles.rightImage}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: 'white',
    padding: 20,
  },
  centerContent: {
    alignItems: 'center',
  },
  centerImage: {
    marginTop:20,
    width: 387, 
    height: 200, 
  },
  frame: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  leftContainer: {
    flex: 1, 
  },
  textBelowImage: {
    fontSize: 16,
  },
  pressableRight: {
    marginLeft: 10,
  },
  rightImage: {
    width: 30,
    height: 30,
  },
});