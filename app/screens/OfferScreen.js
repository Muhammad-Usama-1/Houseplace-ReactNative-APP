import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import AppHeading from "../components/AppHeading";
import data from "../dev-data/listings";
import Listing from "../components/Listing";
import Screen from "../components/Screen";

const OfferScreen = () => {
  const [offers, setOffer] = useState([]);
  useEffect(() => {
    setOffer(data.filter((item) => item.offer));
  }, []);
  return (
    <Screen>
      <AppHeading> Offers For You </AppHeading>
      <FlatList
        data={offers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Listing item={item} />}
      />
    </Screen>
  );
};

export default OfferScreen;

const styles = StyleSheet.create({});
