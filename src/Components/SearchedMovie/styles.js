import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 15,
  },

  image: {
    width: 180,
    height: 160,
    borderRadius: 10,
    resizeMode: "cover",
    marginHorizontal: 10,
  },
  title: {
    color: "white",
    width: "30%",
    textAlign: "center",
    maxLine: 2,
    fontSize: 18,
    marginVertical: 5,
    marginLeft: 10,
    fontWeight: "bold",
  },
  icon: {
    marginLeft: "auto",
  },
});
