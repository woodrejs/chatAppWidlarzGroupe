import React, { useEffect,memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../style/colors";
import { useNavigation } from "@react-navigation/native";

export default Intro = memo(() => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Register");
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chatty.</Text>
      <Text style={styles.subHeader}>mobile app</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.blue[300],
  },
  header: {
    fontFamily: "Poppins700",
    fontSize: 60,
    lineHeight: 80,
    color: COLORS.plum[500],
  },
  subHeader: {
    fontFamily: "Poppins500",
    fontSize: 20,
    color: COLORS.plum[700],
    textDecorationLine: "underline",
  },
});
