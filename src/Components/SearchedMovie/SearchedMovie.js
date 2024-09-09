import { View, Text, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./styles";
import { ApiEndPoints } from "../../Config/EndPoints";
export default function SearchedMovie({ movie }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: ApiEndPoints.imageBaseUrl + movie.backdrop_path }}
      />

      <Text style={styles.title}>{movie.title}</Text>
      <AntDesign
        style={styles.icon}
        name="playcircleo"
        size={30}
        color="white"
      />
    </View>
  );
}
