import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { color } from "../config/colors";
import Listing from "../components/Listing";
import AppHeading from "../components/AppHeading";
const listings = [
  {
    id: 1,
    title: " Beautiful Stradford Condo",
    address: "8601 West Shah wali ullah nagar sec 11- 1/2 ",
    price: 2000,
    numOfBedrooms: 2,
    numOfBathrooms: 1,
    category: "sale",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: " Place fo Thrill Adventure",
    address: "8601 Defence Clifton Bukhari 90132 ",
    price: 4000,
    numOfBedrooms: 3,
    numOfBathrooms: 2,
    category: "sale",
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Perfect Family for 3 People",
    address: "North nazimabad , Block k-4",
    price: 5000,
    numOfBedrooms: 4,
    numOfBathrooms: 1,
    category: "sale",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
const ListingsScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppHeading> Places for Rent </AppHeading>
      <FlatList
        data={listings}
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
