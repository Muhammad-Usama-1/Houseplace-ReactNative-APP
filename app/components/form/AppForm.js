import { StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";

const AppForm = ({ children, initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({}) => children}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
