import { StyleSheet, View } from "react-native";
import * as yup from "yup";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import Icon from "../components/Icon";
import AppHeading from "../components/AppHeading";
import AppFormInput from "../components/AppFormInput";
import FormSubmit from "../components/FormSubmit";
import AppForm from "../components/AppForm";
import { color } from "../config/colors";
import AppButton from "../components/AppButton";
const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
  // website: yup.string().url(),
  // createdOn: yup.date().default(function () {
  //   return new Date();
  // }),
});
const SignInScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        // onSubmit={(values) => console.log(values)}
        onSubmit={(values) => navigation.navigate("Home")}
        validationSchema={validationSchema}
      >
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
    padding: 20,
  },
  signinOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 50,
    marginVertical: 20,
  },
});
