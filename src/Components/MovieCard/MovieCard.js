import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ApiEndPoints } from "../../core/EndPoints";

export default function MovieCard({ movie, topRated = false }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      opacity={0.8}
      onPress={() => navigation.navigate("Details", { movie })}
    >
      <ImageBackground
        source={{ uri: ApiEndPoints.imageBaseUrl + movie?.poster_path }}
        style={styles.image}
      >
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/n.png")}
          />

          {topRated && (
            <Image
              style={styles.headerImage}
              source={require("../../assets/Tob.png")}
            />
          )}
        </View>
        {movie.id % 2 === 0 && (
          <View style={styles.episodes}>
            <Text style={styles.newEpisodes}>New Episodes</Text>
          </View>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
}
