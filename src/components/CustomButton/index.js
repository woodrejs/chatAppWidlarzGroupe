import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../../style/colors";
import { TEXT } from "../../../style/texts";

export default CustomButton = ({ label, handlePress, className }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: COLORS.plum[500],
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  label: { ...TEXT.button.default, color: COLORS.white },
});
