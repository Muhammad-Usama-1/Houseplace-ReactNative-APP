import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import { color } from "../config/colors";
import Icon from "../components/Icon";
const SignInScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.titleContainer}>
        <AppText style={styles.heading}>Welcome</AppText>
        <AppText style={styles.heading}>Back</AppText>
      </View>
      <View style={styles.inputContainer}>
        <AppTextInput placeholder="Username or Email" icon={"account"} />
        <AppTextInput placeholder="Password" icon={"lock"} />
        <AppText style={styles.forget}>Forget Password ?</AppText>
      </View>
      <View style={styles.btnContainer}>
        <AppText> Sign In</AppText>
        <Icon size={50} name={"arrow-right"} />
      </View>

      <AppText style={{ textAlign: "center" }}> Sign In With</AppText>
      <View style={styles.signinOptions}>
        <Icon
          backgroundColor={color.white}
          iconColor={color.dark}
          size={50}
          name={"google"}
        />
        <Icon
          backgroundColor={color.white}
          iconColor={color.dark}
          size={50}
          name={"facebook"}
        />
        <Icon
          backgroundColor={color.white}
          iconColor={color.dark}
          size={50}
          name={"apple"}
        />
      </View>
    </Screen>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },

  titleContainer: {
    padding: 20,
  },
  container: {
    backgroundColor: color.light,
  },
  heading: {
    fontSize: 50,
    fontWeight: "100",
    color: "#000",
    paddingLeft: 10,
  },
  forget: {
    color: color.primary,
    fontWeight: "600",
    marginTop: 20,
    textAlign: "right",
  },
  inputContainer: {
    padding: 20,
  },
  signinOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 50,
    marginVertical: 20,
  },
});
