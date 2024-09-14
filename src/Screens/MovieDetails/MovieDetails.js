import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import styles from "./styles";
import { ApiEndPoints } from "../../core/EndPoints";

export default function MovieDetails({ navigation, route }) {
  const { movie } = route?.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{ uri: ApiEndPoints.imageBaseUrl + movie?.backdrop_path }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign
            style={styles.closeIcon}
            name="closecircle"
            size={30}
            color="grey"
          />
        </Pressable>
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.info}>
          <Text style={styles.category}>{movie.vote_count} Votes</Text>
          <View style={styles.rateContainer}>
            <Text style={styles.rate}> {movie.vote_average.toFixed(1)} ⭐</Text>
          </View>
        </View>
      </ImageBackground>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.buttons}>
          <Pressable>
            <Text style={styles.play}>Watch Now</Text>
          </Pressable>
          <Pressable>
            <View style={styles.recommend}>
              <Feather
                style={styles.recommendIcon}
                name="send"
                size={24}
                color="white"
              />
              <Text style={styles.recommendText}>Recommend</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.movieDetails}>
          <Text style={styles.releaseDate}>{movie.release_date}</Text>
          <Text style={styles.cast}>{movie.title}</Text>
          <Text style={styles.description}>{movie.overview}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
