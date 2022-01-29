import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import { color } from "../config/colors";

const Category = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <AppText> {item.title} </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});
