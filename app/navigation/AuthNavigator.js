import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RegisterScreen from "../screens/RegisterScreen";
import SignInScreen from "../screens/SignInScreen";
import AuthContext from "../auth/context";
import MyprofileScreen from "../screens/MyprofileScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const authContext = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {authContext.user ? (
        <Stack.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={MyprofileScreen}
        />
      ) : (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={RegisterScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Sign In"
            component={SignInScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
export default AuthNavigator;
