import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>For Mahmoud.</Text>
        <Image style={styles.image} source={require("../../assets/img1.jpg")} />
      </View>
      <View style={styles.category}>
        <View style={styles.caegoryItem}>
          <Text style={styles.caegoryText}>Series</Text>
        </View>
        <View style={styles.caegoryItem}>
          <Text style={styles.caegoryText}>Films</Text>
        </View>
        <View style={styles.caegoryItem}>
          <Text style={styles.caegoryText}>Categories</Text>
        </View>
      </View>
    </View>
  );
}
