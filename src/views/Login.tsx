import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/login_styles";
import { useState } from "react";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.imageLogo}
      />
      <TextInput
        // value={text}
        // onChangeText={(newText) => setText(newText)}
        style={styles.userInput}
        placeholder="Usuario"
      />
      <TextInput
        // value={text}
        // onChangeText={(newText) => setText(newText)}
        style={styles.userInput}
        placeholder="Senha"
      />
      <TouchableOpacity style={styles.singinButton}>
        <Text style={styles.signinText}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
