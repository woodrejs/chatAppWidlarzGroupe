import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { TEXT } from "../../../style/texts";
import { COLORS } from "../../../style/colors";
import { useRoute, useNavigation } from "@react-navigation/native";

export default SingleRoom = () => {
  const navigation = useNavigation();

  const handlePress = () => navigation.navigate("Chat");

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.avatar} />
        <View style={styles.contentBox}>
          <Text style={styles.title}>The one with Harry</Text>
          <Text style={styles.subTitle}>Hey Harry, how you doing?</Text>
        </View>
        <View style={styles.statusBox}>
          <View style={styles.status} />
          {/* <Text style={styles.time}>24 m ago</Text> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.plum[500],
    borderRadius: 12,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: "relative",
  },
  avatar: {
    height: 64,
    width: 64,
    backgroundColor: "red",
    marginRight: 16,
    borderRadius: 50,
  },
  contentBox: { justifyContent: "center" },
  title: { ...TEXT.heading.h3, marginBottom: 4, color: COLORS.white },
  subTitle: {
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 16.71,
    color: COLORS.blue[100],
  },
  statusBox: {
    alignItems: "flex-end",
    position: "absolute",
    top: 12,
    right: 16,
  },
  status: { height: 12, width: 12, backgroundColor: COLORS.active, borderRadius: 50 },
  time: {
    fontSize: 13,
    fontStyle: "normal",
    color: COLORS.gray[500],
    lineHeight: 16,
  },
});
