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
  containerBills: {
    width: "100%",
    justifyContent: "space-between",
    height: "80%",
    borderRadius: 18,
    padding: 12,
    backgroundColor: "#769be0ff",
  },
  containerHeader: {
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    height: 35,
    borderBottomWidth: 3,
    paddingHorizontal: 6,
    marginBottom: 12,
  },
  textBills: {
    fontSize: 22,
    padding: 6,
  },
  containerTotal: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 3,
  },
  totalText: {
    marginLeft: 24,
    fontSize: 24,
    paddingHorizontal: 12,
    fontWeight: "bold",
  },
});
