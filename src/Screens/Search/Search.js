import { View, Text, FlatList, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import SearchedMovie from "../../Components/SearchedMovie/SearchedMovie";
import { useState } from "react";
import { searchMoviesByName } from "./config";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function Search() {
  const navigation = useNavigation();
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const startSarch = async () => {
    movies = await searchMoviesByName(searchInput);
    setSearchResults(movies);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color="white"
              style={styles.arrowIcon}
            />
          </Pressable>
          <MaterialIcons
            name="search"
            size={24}
            color="#7e7e7e"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#7e7e7e"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={searchInput}
            onChangeText={(text) => setSearchInput(text)}
            onSubmitEditing={() => startSarch()}
            clearButtonMode="always"
          />
        </View>
        <Text style={styles.headerText}>Result Search</Text>

        <FlatList
          data={searchResults}
          renderItem={({ item }) => <SearchedMovie movie={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />
      </View>
    </SafeAreaView>
  );
}
