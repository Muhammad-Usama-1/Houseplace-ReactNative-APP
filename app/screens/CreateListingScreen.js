import { ScrollView, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import * as yup from "yup";
import * as storageApi from "../api/storageApi";

import AuthContext from "../auth/context";
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
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../api/firebase.config";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = yup.object().shape({
  price: yup.number().min(0).max(1000000).label("Price"),
  images: yup.array().min(1, "Please select at least one image ").required(),
  address: yup.string().required().label("Address"),
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
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const handleSubmit = async (values) => {
    setData([]);
    const colRef = collection(db, "listings");

    try {
      setLoading(true);
      const results = await storageApi.uploadFiles(values.images, user.uid);
      values.images = results;
      values.user = user.uid;
      values.category = values.category.title;
      await addDoc(colRef, values);
      const q = query(colRef, where("user", "==", user.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setLoading(false);

      navigation.navigate("Listings", { data: data, title: "Your Listings" });
      console.log(data);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log("Coulnt create lisitngs.....", error);
      alert("Something went wrong on creating list");
    }
  };

  return (
    <ScrollView>
      <Screen style={styles.container}>
        <ActivityIndicator visible={loading} />
        <AppForm
          initialValues={{
            address: "",
            bedrooms: "",
            bathrooms: "",
            category: null,
            furnished: "",
            parking: "",
            price: "",
            images: [],
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
