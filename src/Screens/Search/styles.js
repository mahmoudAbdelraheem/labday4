import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  arrowIcon: {
    marginHorizontal: 15,
  },
  searchIcon: {
    position: "absolute",
    left: 90,
    zIndex: 1,
  },
  input: {
    backgroundColor: "#323232",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingLeft: 50,
    color: "#7e7e7e",
    fontSize: 18,
    flex: 1,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },
});
