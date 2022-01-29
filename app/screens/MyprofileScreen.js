import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppHeading from "../components/AppHeading";
import { color } from "../config/colors";
import AppText from "../components/AppText";
import AvatarInfo from "../components/AvatarInfo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Listing from "../components/Listing";
const obj = {
  id: 3,
  title: "Perfect Family for 3 People",
  price: 5000,
  numOfBedrooms: 4,
  numOfBathrooms: 1,
  category: "sale",
  image:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
};

const MyprofileScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppHeading>My Profile</AppHeading>
      <View style={styles.innerContainer}>
        <AppText style={{ fontWeight: "bold" }}>Personal Details</AppText>
        <AppText style={styles.subHeading}>Change </AppText>
      </View>
      <AvatarInfo />
      <View style={styles.ctaContainer}>
        <MaterialCommunityIcons name="home" size={30} color={"black"} />
        <AppText>Sell or rent your home</AppText>
        <MaterialCommunityIcons name="arrow-right" size={30} color={"black"} />
      </View>
      <View style={styles.listingContainer}>
        <AppText style={styles.bold}>Your Listings</AppText>
        <Listing
          deleteAction={() => console.log("Delete Action for person lsiting")}
          item={obj}
        />
      </View>
    </Screen>
  );
};

export default MyprofileScreen;

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
  },
  container: {
    backgroundColor: color.light,
  },
  ctaContainer: {
    flexDirection: "row",
    backgroundColor: color.white,
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 10,
    justifyContent: "space-around",
    marginBottom: 20,
  },
  subHeading: {
    fontWeight: "bold",
    color: color.primary,
  },
  innerContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listingContainer: {
    padding: 15,
  },
});
