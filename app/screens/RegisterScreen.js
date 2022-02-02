import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Icon from "../components/Icon";
import { color } from "../config/colors";
import AppHeading from "../components/AppHeading";
import AppButton from "../components/AppButton";

const RegisterScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <AppHeading style={{ marginTop: 10, marginBottom: 10 }}>
        {" "}
        Create an Account{" "}
      </AppHeading>

      <View style={styles.inputContainer}>
        <AppTextInput placeholder="Username or Email" icon={"account"} />
        <AppTextInput placeholder="Password" icon={"lock"} />
        <AppTextInput placeholder="Confirm Password" icon={"lock"} />
        <AppButton
          title={"already an Account ? "}
          onPress={() => navigation.navigate("Sign In")}
        />
      </View>
      <View style={styles.btnContainer}>
        <AppText>Register</AppText>
        <Icon
          onPress={() => navigation.navigate("Home")}
          size={50}
          name={"arrow-right"}
        />
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
