import { StyleSheet, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import Icon from "../Icon";
import AppText from "../AppText";
import AppButton from "../AppButton";

const FormSubmit = ({ icon, title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <>
      {icon ? (
        <View style={styles.btnContainer}>
          <AppText style={styles.title}> {title} </AppText>
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
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
});
