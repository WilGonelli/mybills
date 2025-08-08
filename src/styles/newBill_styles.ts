import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#234688ff",
    alignItems: "center",
    paddingVertical: 36,
    paddingHorizontal: 12,
    maxHeight: "100%",
    gap: 18,
  },
  newBillTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  formContainer: {
    width: "100%",
    height: "80%",
    gap: 8,
  },
  labelInput: {
    color: "white",
    fontSize: 18,
    paddingHorizontal: 12,
  },
  inputArea: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    marginTop: -10,
  },
});
