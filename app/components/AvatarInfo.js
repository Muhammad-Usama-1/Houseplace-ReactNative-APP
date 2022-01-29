import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../config/colors";
import AppText from "./AppText";

const AvatarInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        }}
      />
      <View style={styles.innerContainer}>
        <AppText style={{ fontWeight: "bold" }}> Muhammad Usama </AppText>
        <AppText style={styles.lightText}> mdusama225@gmail.com</AppText>
        <AppText style={styles.lightText}> +923402306855 </AppText>

        <AppText style={{ color: color.medium }}>
          House no 615 sheet no 5 shah wali ullah nagar sec 11-1/2
        </AppText>
      </View>
    </View>
  );
};

export default AvatarInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flexDirection: "row",
    padding: 10,
    paddingTop: 30,
    borderRadius: 20,
    marginHorizontal: 15,
    marginBottom: 50,
  },
  innerContainer: {
    marginLeft: 20,
    marginRight: 100,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  lightText: {
    color: color.medium,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: color.medium,
    borderStyle: "dotted",
  },
});
