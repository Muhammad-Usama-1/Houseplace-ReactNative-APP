import { StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as listingsApi from "../api/listingsApi";
import AvatarInfo from "../components/AvatarInfo";
import AppHeading from "../components/AppHeading";
import AuthContext from "../auth/context";
import AppText from "../components/AppText";
import { auth } from "../api/firebase.config";
import { color } from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";

import Listing from "../components/Listing";
import ActivityIndicator from "../components/ActivityIndicator";

const MyprofileScreen = ({ navigation }) => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(AuthContext);

  const getList = async () => {
    try {
      const result = await listingsApi.getUserListings(user.uid);
      setListings(result);
      console.log(result);
      setLoading(false);
    } catch (error) {
      alert("unable to get user lists");
      console.log(error);
    }
  };
  useEffect(() => {
    getList();
  }, [user.uid]);

  const handleLogout = async () => {
    console.log("Logging out the user...");
    try {
      await auth.signOut();
      setUser(null);
      navigation.navigate("Home");
    } catch (error) {
      console.log("Error on sign out", error);
    }
  };
  if (loading) return <ActivityIndicator visible={loading} />;

  return (
    <Screen style={styles.container}>
      <AppHeading>My Profile</AppHeading>

      <View style={styles.innerContainer}>
        <AppText style={{ fontWeight: "bold" }}>Personal Details</AppText>
        <AppText style={styles.subHeading}>Change </AppText>
        <Icon
          onPress={() => handleLogout()}
          backgroundColor={color.white}
          iconColor={color.dark}
          size={50}
          name={"trash-can"}
        />
      </View>
      <AvatarInfo user={user} />
      <View style={styles.ctaContainer}>
        <MaterialCommunityIcons name="home" size={30} color={"black"} />
        <AppText>Sell or rent your home</AppText>
        <MaterialCommunityIcons name="arrow-right" size={30} color={"black"} />
      </View>

      <View style={styles.listingContainer}>
        <AppText style={styles.bold}>Your Listings</AppText>
        {!loading &&
          listings.length > 0 &&
          listings.map((list) => (
            <Listing
              deleteAction={() => deleteList(list.id)}
              item={list}
              key={list.id}
            />
          ))}
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
