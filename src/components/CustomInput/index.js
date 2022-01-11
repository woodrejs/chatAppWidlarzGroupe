import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { COLORS } from "../../../style/colors";
import { TEXT } from "../../../style/texts";

export default CustomInput = ({
  label,
  name,
  handleChange,
  handleBlur,
  value,
  secure = false,
  error,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        name={name}
        style={styles.textInput}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={value}
        secureTextEntry={secure}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 16, position: "relative" },
  textInput: {
    backgroundColor: COLORS.white,
    height: 47,

    borderRadius: 10,

    padding: 12,
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 16.71,
    margin: 0,
  },
  label: { ...TEXT.heading.h3, color: COLORS.blue[10], marginBottom: 4 },
  error: {
    fontSize: 12,
    color: COLORS.error,
    position: "absolute",
    bottom: -18,
    right: 0,
  },
});
