import React from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../../style/colors";
import { TEXT } from "../../../style/texts";
import { Formik } from "formik";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import * as yup from "yup";
import { QUERIES } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import { login } from "../../redux/auth.slice";
import { useDispatch } from "react-redux";
import useError from "../../hooks/useError";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export default Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { showErrorModal } = useError();
  const [loginUser] = useMutation(QUERIES.LOGIN_USER);

  const handlerSubmit = async (values, { resetForm }) => {
    if (values) {
      try {
        const resp = await loginUser({
          variables: { email: values.email, password: values.password },
        });
        dispatch(login([resp.data.loginUser.token, resp.data.loginUser.user]));
        resetForm();
        navigation.navigate("Rooms");
      } catch (error) {
        showErrorModal("Sorry, there was an login error. Try again.");
      }
    }
  };
  const handlePress = () => navigation.navigate("Register");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome back</Text>
      <Text style={styles.subHeader}>Log in and stay in touch with everyone!</Text>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidationSchema}
        onSubmit={handlerSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.form}>
            <CustomInput
              label="e-mail adress"
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              error={errors.email}
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

            <View style={styles.buttonBox}>
              <CustomButton
                handlePress={handleSubmit}
                label="Log in"
                isDisabled={errors}
              />
            </View>
          </View>
        )}
      </Formik>

      <View style={styles.loginBox}>
        <Text style={styles.loginInfo}>Don’t have an acccount?</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.loginLink}>Sign up</Text>
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
  form: { flex: 1 },
  buttonBox: { marginTop: 264 },
  header: { ...TEXT.heading.h1, color: COLORS.plum[500], marginBottom: 24 },
  footer: { marginTop: 16 },
  info: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "400",
    textAlign: "center",
    color: COLORS.white,
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
  subHeader: { ...TEXT.heading.h2, color: COLORS.white, marginBottom: 36 },
});
