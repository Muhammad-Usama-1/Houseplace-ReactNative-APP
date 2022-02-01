import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import Icon from "./Icon";
import { useFormikContext } from "formik";
import AppButton from "./AppButton";

const FormSubmit = ({ icon, title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <>
      {icon ? (
        <View style={styles.btnContainer}>
          <AppText> {title} </AppText>
          <Icon onPress={handleSubmit} size={50} name={"arrow-right"} />
        </View>
      ) : (
        <AppButton onPress={handleSubmit} title={title} />
      )}
    </>
  );
};

export default FormSubmit;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
});
