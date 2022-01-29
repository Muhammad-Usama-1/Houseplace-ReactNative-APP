import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppHeading from "../components/AppHeading";
import { color } from "../config/colors";

const CreateListingScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppHeading>Create a Listings</AppHeading>
    </Screen>
  );
};

export default CreateListingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
  },
});
