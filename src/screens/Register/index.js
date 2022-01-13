import React, { memo } from "react";
import useError from "../../hooks/useError";
import Loader from "../../components/Loader";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import OpenURLWrapper from "../../components/OpenURLWrapper";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../style/colors";
import { TEXT } from "../../style/texts";
import { Formik } from "formik";
import { registerValidationSchema } from "../../utils/validations";
import { QUERIES } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import { login } from "../../redux/auth.slice";
import { useDispatch } from "react-redux";

export default Register = memo(() => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { showErrorModal } = useError();
  const [registerUser, { loading: registerLoading }] = useMutation(QUERIES.REGISTER_USER);
  const [loginUser, { loading: loginLoading }] = useMutation(QUERIES.LOGIN_USER);

  const handlerSubmit = async (values, { resetForm }) => {
    if (values) {
      try {
        await registerUser({ variables: values });
        const resp = await loginUser({
          variables: { email: values.email, password: values.password },
        });

        dispatch(login([resp.data.loginUser.token, resp.data.loginUser.user]));
        navigation.navigate("Rooms");
      } catch (error) {
        showErrorModal("Sorry, there was an register error. Try again.");
      }
    }
  };
  const handlePress = () => navigation.navigate("Login");

  if (registerLoading || loginLoading) return <Loader color={COLORS.blue[300]} />;

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
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue[300],
    paddingHorizontal: 16,
  },
  buttonBox: { marginTop: 20 },
  header: {
    ...TEXT.heading.h1,
    color: COLORS.plum[500],
    height: 110,
    lineHeight: 110,
  },
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
    alignItems: "flex-start",
    height: 50,
  },
  loginInfo: {
    fontSize: 14,
    lineHeight: 16.71,
    fontWeight: "400",
    color: COLORS.white,
  },
  loginLink: { ...TEXT.button.small, color: COLORS.plum[500], marginLeft: 12 },
});
