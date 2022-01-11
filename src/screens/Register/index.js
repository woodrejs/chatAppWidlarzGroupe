import React from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../../style/colors";
import { TEXT } from "../../../style/texts";
import { Formik } from "formik";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import OpenURLWrapper from "../../components/OpenURLWrapper";
import * as yup from "yup";

const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  firstName: yup
    .string()
    .min(3, ({ min }) => `First name must be at least ${min} characters`)
    .required("First name is required"),
  lastName: yup
    .string()
    .min(3, ({ min }) => `Last name must be at least ${min} characters`)
    .required("Last name is required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords confirmation must match password.")
    .required("Password confirmation is required"),
});

export default Register = () => {
  const navigation = useNavigation();

  const handlerSubmit = (values, { resetForm }) => {
    if (values) {
      resetForm();
    }
  };
  const handlePress = () => navigation.navigate("Login");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Create account</Text>

      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          passwordConfirmation: "",
        }}
        validationSchema={registerValidationSchema}
        onSubmit={handlerSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <CustomInput
              label="e-mail adress"
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              error={errors.email}
            />
            <CustomInput
              label="first name"
              name="firstName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.firstName}
              error={errors.firstName}
            />
            <CustomInput
              label="last name"
              name="lastName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.lastName}
              error={errors.lastName}
            />
            <CustomInput
              label="password"
              name="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              error={errors.password}
              secure
            />

            <CustomInput
              label="password confirmation"
              name="passwordConfirmation"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.passwordConfirmation}
              error={errors.passwordConfirmation}
              secure
            />

            <View style={styles.buttonBox}>
              <CustomButton
                handlePress={handleSubmit}
                label="Sign up"
                isDisabled={errors}
              />
            </View>
          </>
        )}
      </Formik>

      <View style={styles.footer}>
        <Text style={styles.info}>By signing up you agree with</Text>
        <View style={styles.linkBox}>
          <OpenURLWrapper url="#">
            <Text style={styles.link}>Terms and Conditions</Text>
          </OpenURLWrapper>
          <Text style={styles.info}> and </Text>
          <OpenURLWrapper url="#">
            <Text style={styles.link}>Privacy Policy</Text>
          </OpenURLWrapper>
        </View>
      </View>

      <View style={styles.loginBox}>
        <Text style={styles.loginInfo}>Already have an acccount?</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue[300],
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  buttonBox: { marginTop: 20 },
  header: { ...TEXT.heading.h1, color: COLORS.plum[500], marginBottom: 36 },
  footer: { marginTop: 16 },
  info: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "400",
    textAlign: "center",
    color: COLORS.white,
  },
  link: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "400",
    textAlign: "center",
    color: COLORS.blue[500],
  },
  linkBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 3,
  },
  loginBox: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 28,
    alignItems: "center",
  },
  loginInfo: {
    fontSize: 14,
    lineHeight: 16.71,
    fontWeight: "400",
    color: COLORS.white,
  },
  loginLink: { ...TEXT.button.small, color: COLORS.plum[500], marginLeft: 12 },
});
