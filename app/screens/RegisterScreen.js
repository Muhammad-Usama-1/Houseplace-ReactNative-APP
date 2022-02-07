import { StyleSheet, View, ActivityIndicator } from "react-native";
import * as yup from "yup";
import React, { useContext, useState } from "react";

import { AppForm, AppFormInput, FormSubmit } from "../components/form";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppHeading from "../components/AppHeading";
import { color } from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";

import * as authApi from "../api/authApi";
import AuthContext from "../auth/context";
import { addUser, updateCurrentUserName } from "../api/usersApi";
const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  name: yup.string().required().label("Full Name"),
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
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const handleSignUp = async (values) => {
    setLoading(true);
    const { email, password, name } = values;
    delete values.confirmPassword;
    try {
      // Authentication
      const userCredential = await authApi.signUp(email, password);
      const user = userCredential.user;

      // Update usersinfo
      updateCurrentUserName(name);

      // get related info and into users database
      const valueCopy = { ...values };
      delete valueCopy.password;

      await addUser(user.uid, valueCopy);
      // set context of user
      authContext.setUser(user);
      setLoading(false);
      // navigate to home screen
      // navigation.navigate("Home");
    } catch (error) {
      console.log("Error On signup with firebase provider", error);
      alert("Something went wrong on Signup..");
    }
  };
  return (
    <Screen style={styles.container}>
      <ActivityIndicator animating={loading} size="large" color={"black"} />

      <AppForm
        onSubmit={handleSignUp}
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
      >
        <AppHeading style={{ marginTop: 10, marginBottom: 10 }}>
          Create an Account
        </AppHeading>

        <View style={styles.inputContainer}>
          <AppFormInput name="name" icon={"account"} placeholder="Full Name" />
          <AppFormInput name="email" icon={"account"} placeholder="Email" />

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
    padding: 10,
  },
  signinOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
