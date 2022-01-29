import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppTag from "../components/AppTag";
import { color } from "../config/colors";
const obj = {
  id: 3,
  title: "Perfect Family for 3 People",
  address: "North nazimabad , Block k-4",
  price: 5000,
  numOfBedrooms: 4,
  numOfBathrooms: 1,
  category: "sale",
  image:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
};
const ListingDetailsScreen = () => {
  return (
    <Screen>
      <Image style={styles.image} source={{ uri: obj.image }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.subHeading}> {obj.title} </AppText>
        <AppText style={{ fontWeight: "bold" }}> {obj.address} </AppText>
        <View style={styles.tagContainer}>
          <AppTag> for rent </AppTag>
          <AppTag backgroundColor="dark"> $500 disconut</AppTag>
        </View>
        <View style={{ marginTop: 10, paddingLeft: 10 }}>
          <AppText>{obj.numOfBedrooms} Bedrooms </AppText>
          <AppText>{obj.numOfBedrooms} Bedrooms </AppText>
          <AppText>Parking Spot </AppText>
          <AppText>Furnished </AppText>
          <AppButton title="Contact Landlord" />
        </View>
      </View>
    </Screen>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  subHeading: {
    fontWeight: "bold",
    fontSize: 26,
  },
  detailsContainer: {
    padding: 10,
    marginTop: 10,
  },
  tagContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
});
