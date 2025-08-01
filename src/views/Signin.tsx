import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/login_styles";

const Signin = () => {
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
        textContentType="nickname"
      />
      <TextInput
        // value={text}
        // onChangeText={(newText) => setText(newText)}
        style={styles.userInput}
        placeholder="Senha"
        textContentType="password"
        secureTextEntry
      />
      <TextInput
        // value={text}
        // onChangeText={(newText) => setText(newText)}
        style={styles.userInput}
        placeholder="Corfime a Senha"
        textContentType="password"
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.loginText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
