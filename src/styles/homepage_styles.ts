import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#234688ff",
    alignItems: "center",
    paddingVertical: 36,
    paddingHorizontal: 12,
    gap: 18,
  },
  homeTitle: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffffff",
    letterSpacing: 5,
    textTransform: "uppercase",
  },
  titleContainer: {
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  monthContainer: {
    textAlign: "center",
    alignItems: "center",
    width: "60%",
  },
  year: {
    fontSize: 18,
    color: "white",
  },
});
