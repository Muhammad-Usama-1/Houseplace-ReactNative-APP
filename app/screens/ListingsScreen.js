import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { color } from "../config/colors";
import Listing from "../components/Listing";
import AppHeading from "../components/AppHeading";
// import data from "../dev-data/listings";
const ListingsScreen = ({ route }) => {
  const { data } = route.params;

  return (
    <Screen style={styles.container}>
      {/* <AppHeading> Places for {title ? title : "Explore"} </AppHeading> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Listing item={item} />}
      />
    </Screen>
  );
};

export default ListingsScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
  },
});
