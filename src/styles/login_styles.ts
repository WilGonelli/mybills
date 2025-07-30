import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6495ED",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    gap: 18,
  },
  imageLogo: {
    width: "100%",
    resizeMode: "stretch",
    height: 150,
    marginBottom: 36,
  },
  userInput: {
    backgroundColor: "white",
    fontSize: 22,
    width: "80%",
    height: 48,
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  singinButton: {
    padding: 6,
  },
  signinText: {
    fontSize: 16,
    textDecorationLine: "underline",
  },
  loginButton: {
    marginTop: 36,
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: "#03f613ff",
  },
  loginText: {
    fontSize: 22,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#241f1fff",
  },
  cancelButton: {
    width: "50%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: "#d6e2d7ff",
  },
});
