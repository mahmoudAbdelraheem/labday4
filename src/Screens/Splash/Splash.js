import { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Splash({ navigation }) {
useEffect(() => {
  const timeoutId = setTimeout(() => {
    navigation.navigate("Main");
  }, 2000);

  return () => {
    clearTimeout(timeoutId);
  };
}, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
