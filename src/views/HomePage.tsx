import { Text, View } from "react-native";
import { styles } from "../styles/homepage_styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <MaterialIcons name="arrow-left" size={72} color="white" />
        <View style={styles.monthContainer}>
          <Text style={styles.homeTitle}>dezembro</Text>
          <Text style={styles.year}> 2025</Text>
        </View>
        <MaterialIcons name="arrow-right" size={72} color="white" />
      </View>
      <View></View>
    </View>
  );
};

export default HomePage;
