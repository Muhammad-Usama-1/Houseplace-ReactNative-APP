import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import AppHeading from "../components/AppHeading";
import data from "../dev-data/listings";
import Listing from "../components/Listing";
import Screen from "../components/Screen";
import * as listingsApi from "../api/listingsApi";
import ActivityIndicator from "../components/ActivityIndicator";
import { color } from "../config/colors";

const OfferScreen = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const getList = async () => {
    try {
      const result = await listingsApi.queryCategory("rent");
      setListings(result);

      setLoading(false);
    } catch (error) {
      alert("unable to get Offer lists");
      console.log(error);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  if (loading) return <ActivityIndicator visible={loading} />;
  return (
    <Screen style={styles.container}>
      <AppHeading> Offers For You </AppHeading>
      {!loading && listings.length > 0 && (
        <FlatList
          data={listings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Listing item={item} />}
        />
      )}
    </Screen>
  );
};

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
  },
});
