import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { COLORS } from "../../../style/colors";
import { TEXT } from "../../../style/texts";
import { getBorderColor } from "./index.utils";
import CustomIcon from "../CustomIcon";

export default CustomInput = ({
  label,
  name,
  handleChange,
  handleBlur,
  value,
  secure = false,
  error,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const handlerFocus = () => setIsFocus(true);
  const handlerBlur = () => {
    handleBlur(name);
    setIsFocus(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        name={name}
        style={{
          ...styles.textInput,
          borderColor: getBorderColor(isFocus, error),
        }}
        onChangeText={handleChange(name)}
        onBlur={handlerBlur}
        onFocus={handlerFocus}
        value={value}
        secureTextEntry={secure}
      />
      {secure && (
        <View style={styles.vision}>
          <CustomIcon name="visionLow" />
        </View>
      )}

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
    borderWidth: 2,
  },
  label: { ...TEXT.heading.h3, color: COLORS.blue[10], marginBottom: 4 },
  error: {
    fontSize: 12,
    color: COLORS.error,
    position: "absolute",
    bottom: -18,
    right: 0,
  },
  vision: { position: "absolute", right: 16, bottom: 16 },
});
