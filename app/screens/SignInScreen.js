import { StyleSheet, View, ActivityIndicator } from "react-native";
import * as yup from "yup";
import React, { useContext, useState } from "react";

import AppText from "../components/AppText";
import AppHeading from "../components/AppHeading";
import { AppForm, FormSubmit, AppFormInput } from "../components/form";
import AppButton from "../components/AppButton";
import { auth } from "../api/firebase.config";
import * as authApi from "../api/authApi";
import { color } from "../config/colors";
import Icon from "../components/Icon";
import { signInWithEmailAndPassword } from "firebase/auth";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("Email"),
  password: yup.string().min(4).required().label("Password"),
  // website: yup.string().url(),
  // createdOn: yup.date().default(function () {
  //   return new Date();
  // }),
});
const SignInScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    const { email, password } = values;
    console.log(values);
    try {
      setLoading(true);
      const userCredintials = await authApi.signIn(email, password);
      const user = userCredintials.user;
      authContext.setUser(user);
      console.log("Succecfully loged in ");
      setLoading(false);
      navigation.navigate("Home");

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        <ActivityIndicator animating={loading} size="large" color={"black"} />
        <View style={styles.titleContainer}>
          <AppHeading> Welcome Back!</AppHeading>
        </View>
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
          <AppText style={styles.forget}>Forget Password ?</AppText>
          <FormSubmit icon={true} title={"sign in"} />

          <AppButton
            title={"Not an Account ?"}
            onPress={() => navigation.navigate("Register")}
          />
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
      </AppForm>
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
    // marginHorizontal: 50,
    marginVertical: 10,
  },
});
