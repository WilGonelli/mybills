import { StyleSheet, Text, View } from "react-native";
import Login from "../views/Login";
import Signin from "../views/Signin";

export default function Routes() {
  return <Signin />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
