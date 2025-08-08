import { View, Text, TextInput } from "react-native";
import { styles } from "../styles/newBill_styles";

export default function NewBillPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.newBillTitle}>Adicionar Conta</Text>
      <View style={styles.formContainer}>
        <Text style={styles.labelInput}>Nome da conta:</Text>
        <TextInput style={styles.inputArea} placeholder="EX.: Agua"></TextInput>
      </View>
    </View>
  );
}
