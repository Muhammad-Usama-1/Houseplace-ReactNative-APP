import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthContext from "./app/auth/context";
import { auth } from "./app/api/firebase.config";
import { color } from "./app/config/colors";
import navigationTheme from "./app/navigation/navigationTheme";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user != null) {
        setUser(user);
      }

      // Do other things
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: color.primary,
    fontWeight: "bold",
    fontSize: 24,
  },
});
