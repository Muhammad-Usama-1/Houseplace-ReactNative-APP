import { FlatList, StyleSheet } from "react-native";
import React from "react";
import Listing from "./Listing";

const Listings = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Listing item={item} />}
    />
  );
};

export default Listings;

const styles = StyleSheet.create({});
