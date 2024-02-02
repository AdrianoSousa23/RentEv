import React from "react";
import { Pressable, Text, StyleSheet, ImageBackground, View } from "react-native";



const TelaDeInicio = ({ navigation }) => {
  return (
    <ImageBackground style={styles.telaDeInicio} resizeMode="cover" source={require("../assets/imagemDeFundo.png")}>
      <View style={styles.container}>
        <View style={styles.frame}>
          <Text style={styles.dirijaOFuturo}>Dirija o futuro com</Text>
          <ImageBackground style={styles.logo} resizeMode="cover" source={require("../assets/logo.png")} />
        </View>
        <Pressable style={styles.iniciarButton} onPress={() => navigation.navigate('login')}>
          <Text style={styles.iniciar}>Iniciar</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  
  },
  iniciar: {
    fontWeight: "700",
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    fontSize: 24,
    color: "#fffdfd",
  },
  iniciarButton: {
    borderRadius: 50,
    backgroundColor: "#5056ed",
    paddingVertical: 10,
    paddingHorizontal: 80,
    marginTop: 20,
    
  },
  dirijaOFuturo: {
    fontWeight: "600",
    fontFamily: "Montserrat-SemiBold",
    textAlign: "center",
    fontSize: 24,
    color: "#000",
  },
  logo: {
    height: 134,
    width: 327,
    marginTop: 20,
  },
  frame: {
    flex: 1,
    alignItems: "center",
    marginTop: 120,
  },
  telaDeInicio: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "visible",
  },
});

export default TelaDeInicio;
