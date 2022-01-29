import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Icon from "../components/Icon";
import { color } from "../config/colors";

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.heading}>Create an Account</AppText>

      <View style={styles.inputContainer}>
        <AppTextInput placeholder="Username or Email" icon={"account"} />
        <AppTextInput placeholder="Password" icon={"lock"} />
        <AppTextInput placeholder="Confirm Password" icon={"lock"} />
        <AppText style={styles.forget}>Already an account</AppText>
      </View>
      <View style={styles.btnContainer}>
        <AppText>Register</AppText>
        <Icon size={50} name={"arrow-right"} />
      </View>

      <AppText style={{ textAlign: "center" }}> Register With</AppText>
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

export default RegisterScreen;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },

  container: {
    backgroundColor: color.light,
  },
  heading: {
    fontSize: 50,
    fontWeight: "100",
    color: "#000",
    paddingLeft: 20,
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
