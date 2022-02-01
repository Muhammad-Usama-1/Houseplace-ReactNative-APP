import { StyleSheet, View } from "react-native";
import React from "react";
import { color } from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";
const AuthOptions = ({
  title,
  icons,
  iconsBg = "white",
  iconsColor = "dark",
  size = 50,
}) => {
  return (
    <>
      <AppText style={styles.text}> {title}</AppText>
      <View style={styles.container}>
        {icons?.map((icon) => (
          <Icon
            key={icon}
            backgroundColor={color[iconsBg]}
            iconColor={color[iconsColor]}
            size={size}
            name={icon}
          />
        ))}
      </View>
    </>
  );
};

export default AuthOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 50,
    marginVertical: 20,
  },
  text: {
    textAlign: "center",
  },
});

{
  /* <AuthOptions title="Sign in with" icons={["google", "facebook", "apple"]} />; */
}
