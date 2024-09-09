import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  image: {
    width: 180,
    height: 250,
    borderRadius: 10,
    resizeMode: "cover",
    marginHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerImage: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
  episodes: {
    width: "70%",
    alignItems: "center",
    marginHorizontal: "auto",
    marginTop: "auto",
    padding: 10,
    backgroundColor: "#c13f32",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  newEpisodes: {
    color: "white",
    fontWeight: "bold",
  },
});
