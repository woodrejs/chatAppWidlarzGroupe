import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export const registerValidationSchema = yup.object().shape({
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
