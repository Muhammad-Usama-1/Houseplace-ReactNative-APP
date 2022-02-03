import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import Screen from "../components/Screen";
import { color } from "../config/colors";
import Listing from "../components/Listing";
import AppHeading from "../components/AppHeading";
import listings from "../dev-data/listings";
// import data from "../dev-data/listings";
const ListingsScreen = ({ route }) => {
  const [data, setData] = useState([]);
  const title = route.params?.title;
  useEffect(() => {
    setData(route.params?.data);
  }, [route]);
  console.log(data);
  // const list = route.params?.data;
  return (
    <Screen style={styles.container}>
      {title && <AppHeading> {title} </AppHeading>}
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
