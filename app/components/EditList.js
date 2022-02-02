import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Formik } from "formik";
const EditList = () => {
  return (
    <View>
      <Formik
        initialValues={{ email: "", category: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default EditList;

const styles = StyleSheet.create({});
