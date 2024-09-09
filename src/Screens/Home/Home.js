import { View, Text, FlatList, ScrollView, Pressable } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
} from "./config";
export default function Home({ navigation }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [playingMovies, setPlayingMovies] = useState([]);
  getHomeMovies = async () => {
    var data;
    data = await getPopularMovies();
    setPopularMovies(data);
    data = await getTopRatedMovies();
    setTopRatedMovies(data);
    data = await getNowPlayingMovies();
    setPlayingMovies(data);
  };
  useEffect(() => {
    getHomeMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeHeader />
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
