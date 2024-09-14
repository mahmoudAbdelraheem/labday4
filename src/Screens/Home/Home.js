import {
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";
import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
} from "./config";
import { ApiEndPoints } from "../../core/EndPoints";
export default function Home({ navigation }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [playingMovies, setPlayingMovies] = useState([]);
  const [banarImageIndex, setBanarImageIndex] = useState(0);
  getHomeMovies = async () => {
    var data;
    data = await getPopularMovies();
    setPopularMovies(data);
    data = await getTopRatedMovies();
    setTopRatedMovies(data);
    data = await getNowPlayingMovies();
    setPlayingMovies(data);
  };
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    getHomeMovies();

    let randomInt = getRandomInt(1, 20);
    setBanarImageIndex(randomInt);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeHeader />
        <View style={styles.banar}>
          <ImageBackground
            style={styles.banarImage}
            source={{
              uri:
                ApiEndPoints.imageBaseUrl +
                popularMovies[banarImageIndex]?.backdrop_path,
            }}
          >
            <View style={styles.banarBtn}>
              <View style={styles.banarPlayBtn}>
                <Entypo name="controller-play" size={28} color="black" />
                <Text style={styles.banarPlayBtnText}>Play</Text>
              </View>
              <View style={styles.banarListBtn}>
                <MaterialIcons name="done" size={28} color="white" />
                <Text style={styles.banarMyListBtnText}>My List</Text>
              </View>
            </View>
            <Text style={styles.banarText}>For Mahmoud.</Text>
          </ImageBackground>
        </View>
        <Text style={styles.textHeader}>Playing Now</Text>
        <FlatList
          data={playingMovies}
          renderItem={({ item }) => <MovieCard movie={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
        <Text style={styles.textHeader}>Popular Movies</Text>
        <FlatList
          data={popularMovies}
          renderItem={({ item }) => <MovieCard movie={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
        <Text style={styles.textHeader}>Top Rated Movies</Text>
        <FlatList
          data={topRatedMovies}
          renderItem={({ item }) => <MovieCard movie={item} topRated={true} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Lets Search for what you want, search by title or category{" "}
          </Text>
          <Pressable
            style={styles.footerBtn}
            onPress={() => navigation.navigate("Search")}
          >
            <Text style={styles.footerBtnText}>Go To Search</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
