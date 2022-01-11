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
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        name={name}
        style={styles.textInput}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={value}
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: COLORS.white,
    height: 47,
    marginBottom: 16,
    borderRadius: 10,

    padding: 12,
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 16.71,
    margin: 0,
  },
  label: { ...TEXT.heading.h3, color: COLORS.blue[10], marginBottom: 4 },
});
