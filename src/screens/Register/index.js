import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS } from "../../../style/colors";
import { TEXT } from "../../../style/texts";
import { Formik } from "formik";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default Register = () => {
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
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <CustomInput
              label="e-mail adress"
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
            />
            <CustomInput
              label="first name"
              name="firstName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.firstName}
            />
            <CustomInput
              label="last name"
              name="lastName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.lastName}
            />
            <CustomInput
              label="password"
              name="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              secure
            />
            <CustomInput
              label="password confirmation"
              name="passwordConfirmation"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.passwordConfirmation}
              secure
            />

            <View style={styles.buttonBox}>
              <CustomButton handlePress={handleSubmit} label="Sign up" />
            </View>
          </>
        )}
      </Formik>
      <View style={styles.footer}>
        <Text style={styles.info}>By signing up you agree with</Text>
        <View style={styles.linkBox}>
          <Text style={styles.link}>Terms and Conditions</Text>
          <Text style={styles.info}> and </Text>
          <Text style={styles.link}>Privacy Policy</Text>
        </View>
      </View>
      <View style={styles.loginBox}>
        <Text style={styles.loginInfo}>Already have an acccount?</Text>
        <TouchableWithoutFeedback>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableWithoutFeedback>
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
