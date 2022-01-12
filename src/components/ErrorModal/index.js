import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import useError from "../../hooks/useError";
import CustomButton from "../CustomButton";
import { COLORS } from "../../../style/colors";
import { TEXT } from "../../../style/texts";

export default ErrorModal = () => {
  const { message } = useSelector(({ errorSlice }) => errorSlice);
  const { hideErrorModal } = useError();

  const handlePress = () => hideErrorModal();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.box}>
        <CustomButton label="Refresh app" handlePress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  box: { width: "80%", marginTop: 50 },
  message: {
    ...TEXT.heading.h1,
    color: COLORS.black,
    width: "80%",
    textAlign: "center",
  },
});
