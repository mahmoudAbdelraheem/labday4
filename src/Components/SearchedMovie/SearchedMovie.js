import { View, Text, Image, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./styles";
import { ApiEndPoints } from "../../Config/EndPoints";
import { useNavigation } from "@react-navigation/native";
export default function SearchedMovie({ movie }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Details", { movie })}>
        <Image
          style={styles.image}
          source={{ uri: ApiEndPoints.imageBaseUrl + movie.backdrop_path }}
        />
      </Pressable>
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
