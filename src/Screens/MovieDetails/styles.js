import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  image: {
    position: "absolute",
    top: 0,
    width: "100%",
    marginTop: 30,
    height: 450,
    resizeMode: "contain",
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  title: {
    marginTop: "auto",
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  category: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#222f35",
    padding: 5,
    borderRadius: 5,
  },
  rateContainer: {
    backgroundColor: "#222f35",
    padding: 5,
    borderRadius: 5,
    margin: 10,
  },
  rate: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  scrollContent: {
    alignItems: "center",
    paddingTop: 480,
    paddingBottom: 20,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1E1E1E",
  },
  play: {
    height: 65,
    backgroundColor: "white",
    color: "black",
    width: 260,
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 10,
    paddingVertical: 15,
    textAlign: "center",
    margin: 10,
  },
  recommend: {
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderColor: "#7e7e7e",
    borderWidth: 1,
    marginEnd: 10,
  },
  recommendIcon: {
    marginRight: 10,
  },
  movieDetails: {
    backgroundColor: "#1E1E1E",
  },
  recommendText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  releaseDate: {
    color: "#7e7e7e",
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
  cast: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  description: {
    color: "white",
    fontSize: 16,
    margin: 10,
  },
});
