import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { COLORS } from "../../style/colors";

export default Loader = ({ color }) => {
  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      <ActivityIndicator size="large" color={COLORS.plum[300]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
