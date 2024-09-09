import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  info: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 5,
    resizeMode: "contain",
  },

  category: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  caegoryItem: {
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
    marginRight: 10,
  },
  caegoryText: {
    color: "white",
    fontWeight: "bold",
  },
});
