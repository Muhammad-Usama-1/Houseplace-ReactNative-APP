import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { color } from "../config/colors";

const ExploreScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.heading}>Explore</AppText>

      <View style={styles.containerBig}>
        <ImageBackground
          source={{
            uri: "https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?b=1&k=20&m=1272128530&s=170667a&w=0&h=k9lT5-DEmkmehDb-EKRHoP1-op2DTgz4ibiWGXmj7h8=",
          }}
          resizeMethod="resize"
          style={styles.mostviwedimage}
        >
          <View style={styles.innerContainer}>
            <AppText style={{ color: color.white }}>Explore</AppText>
          </View>
        </ImageBackground>
      </View>
    </Screen>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.50)",
  },
  containerBig: {
    padding: 10,
  },
  container: {
    backgroundColor: color.light,
  },
  heading: {
    fontSize: 50,
    fontWeight: "100",
    color: "#000",
    paddingLeft: 20,
    marginBottom: 20,
  },
  mostviwedimage: {
    width: "100%",
    height: 200,
    overflow: "hidden",
    borderRadius: 10,
  },
  subHeading: {
    fontSize: 20,
  },
});
