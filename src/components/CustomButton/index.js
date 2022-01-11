import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { COLORS } from "../../../style/colors";
import { TEXT } from "../../../style/texts";

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export default CustomButton = ({ label, handlePress, isDisabled }) => {
  return (
    <TouchableHighlight onPress={handlePress} style={styles.box}>
      <View
        style={{
          ...styles.container,
          backgroundColor: isEmpty(isDisabled) ? COLORS.plum[500] : COLORS.gray[300],
        }}
      >
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  box: { borderRadius: 12 },
  label: { ...TEXT.button.default, color: COLORS.white },
});
