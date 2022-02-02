import { StyleSheet, Text, View } from "react-native";
import * as yup from "yup";

import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import Icon from "../components/Icon";
import { color } from "../config/colors";
import AppHeading from "../components/AppHeading";
import AppButton from "../components/AppButton";
import { AppForm, AppFormInput, FormSubmit } from "../components/form";

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(4).required().label("Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password")
    .required(),

  // website: yup.string().url(),
  // createdOn: yup.date().default(function () {
  //   return new Date();
  // }),
});
const RegisterScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <AppForm
        onSubmit={(values) => console.log(values)}
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
      >
        <AppHeading style={{ marginTop: 10, marginBottom: 10 }}>
          Create an Account
        </AppHeading>

        <View style={styles.inputContainer}>
          <AppFormInput
            name="email"
            icon={"account"}
            placeholder="Username or Email"
          />

          <AppFormInput
            secureTextEntry={true}
            placeholder="Password"
            icon={"lock"}
            name="password"
          />
          <AppFormInput
            secureTextEntry={true}
            placeholder="Confirm Password"
            icon={"lock"}
            name="confirmPassword"
          />
          {/* <AppTextInput placeholder="Username or Email" icon={"account"} />
          <AppTextInput placeholder="Password" icon={"lock"} />
          <AppTextInput placeholder="Confirm Password" icon={"lock"} /> */}
          <AppButton
            title={"already an Account ? "}
            onPress={() => navigation.navigate("Sign In")}
          />
        </View>
        <FormSubmit icon={true} title={"Register"} />

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
      </AppForm>
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
