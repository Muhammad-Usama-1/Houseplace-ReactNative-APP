import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import AppHeading from "../components/AppHeading";
import { color } from "../config/colors";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import AppSwitch from "../components/AppSwitch";
import AppButton from "../components/AppButton";
import ImageInput from "../components/ImageInput";

const CreateListingScreen = () => {
  const [parking, setParking] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [offer, setOffer] = useState(false);
  const [category, setCategory] = useState();
  const categories = [
    { id: 1, title: "Sell" },
    { id: 2, title: "Rent" },
  ];
  return (
    <ScrollView>
      <Screen style={styles.container}>
        <AppHeading>Create a Listings</AppHeading>
        <ImageInput />
        <AppPicker
          placeholder="Category"
          items={categories}
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
        />

        <AppTextInput
          keyboardType="numeric"
          placeholder="No of Beddrooms"
          icon="bed-double-outline"
        />
        <AppTextInput
          keyboardType="numeric"
          placeholder="No of Bathrooms"
          icon="scale-bathroom"
        />

        <AppSwitch
          title="Parking Spot"
          value={parking}
          onChange={() => setParking(!parking)}
        />
        <AppSwitch
          title="Furnished"
          value={furnished}
          onChange={() => setFurnished(!furnished)}
        />
        <AppTextInput placeholder="Address" />
        <AppSwitch
          title="Offer"
          value={offer}
          onChange={() => setOffer(!offer)}
        />
        <AppTextInput keyboardType="numeric" placeholder="Price/Month" />
        <AppButton title={"Create Listing"} />
      </Screen>
    </ScrollView>
  );
};

export default CreateListingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    paddingHorizontal: 10,
  },
  innerContainer: {},
});
