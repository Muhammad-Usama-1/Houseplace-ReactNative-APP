import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import * as yup from "yup";

import {
  AppForm,
  AppFormInput,
  AppFormPicker,
  AppFormSwitch,
  ImageInput,
  FormSubmit,
} from "../components/form";
import AppHeading from "../components/AppHeading";
import { color } from "../config/colors";
import Screen from "../components/Screen";

const validationSchema = yup.object().shape({
  price: yup.number().required().min(10).max(1000000).label("Price"),
  address: yup.string().required().label("Address"),
  images: yup.array().min(1, "Please select at least one image ").required(),
  bedrooms: yup.string().required(),
  bathrooms: yup.string().required(),
  parking: yup.boolean(),
  offer: yup.boolean(),
  furnished: yup.boolean(),
  category: yup.object().required().nullable().label("Category"),
});
const categories = [
  { id: 1, title: "Sell" },
  { id: 2, title: "Rent" },
  { id: 3, title: "Rent/Sell" },
];
const CreateListingScreen = ({ navigation }) => {
  // Post Data to Server and recive all listings of particular user as data(for sure it will be aray)
  // Navigte to listings screen as success by passing title
  const handleSubmit = (values) => {
    console.log("Navigating to your listing screen...");
    values.id = 13132;
    const newlist = [values];
    navigation.navigate("Listings", {
      data: newlist,
      title: "Your Listings",
    });
  };

  return (
    <ScrollView>
      <Screen style={styles.container}>
        <AppForm
          initialValues={{
            address: "",
            bedrooms: "",
            bathrooms: "",
            category: null,
            furnished: "",
            price: "",
            images: [],
            parking: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppHeading>Create a Listings</AppHeading>
          <ImageInput name="images" />
          <AppFormInput
            name="price"
            maxLength={8}
            keyboardType="numeric"
            placeholder="Price/Month"
          />
          <AppFormInput
            maxLength={200}
            numberOfLines={3}
            multiline
            name="address"
            placeholder="Address"
          />

          <AppFormPicker
            placeholder="Category"
            items={categories}
            name="category"
          />

          <AppFormInput
            name="bedrooms"
            keyboardType="numeric"
            placeholder="No of Beddrooms"
            icon="bed-double-outline"
          />
          <AppFormInput
            name="bathrooms"
            keyboardType="numeric"
            placeholder="No of Bathrooms"
            icon="scale-bathroom"
          />
          <AppFormSwitch title="Parking" name="parking" />
          <AppFormSwitch title="Ofer" name="offer" />
          <AppFormSwitch title="Furnished" name="furnished" />
          <FormSubmit title={"create Listing"} />
        </AppForm>
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
});
