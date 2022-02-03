import { StyleSheet, View } from "react-native";
import React from "react";

import AppButton from "../components/AppButton";
import AppHeading from "../components/AppHeading";
import AppTextInput from "../components/AppTextInput";
import { color } from "../config/colors";
import Screen from "../components/Screen";

const MessagesScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppHeading>Contact Landloard</AppHeading>

      <View style={styles.innerContainer}>
        <AppTextInput
          type="text"
          numberOfLines={3}
          multiline
          placeholder="Your Message"
        />
        <AppButton title={"Send Message"} />
      </View>
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
  },
  innerContainer: {
    paddingHorizontal: 10,
  },
});
