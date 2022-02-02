import { FlatList, StyleSheet } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import { color } from "../config/colors";
import Listing from "../components/Listing";
import AppHeading from "../components/AppHeading";
import listings from "../dev-data/listings";
// import data from "../dev-data/listings";
const ListingsScreen = ({ route }) => {
  const { title } = route.params;

  return (
    <Screen style={styles.container}>
      {title && <AppHeading> {title} </AppHeading>}
      <FlatList
        data={route.params?.data ? route.params.data : listings}
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
