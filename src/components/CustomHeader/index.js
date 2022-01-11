import React from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { COLORS } from "../../../style/colors";
import { TEXT } from "../../../style/texts";
import CustomIcon from "../CustomIcon";
import { useSelector } from "react-redux";

export default CustomHeader = ({ route }) => {
  const routeName = route.route.name;
  const canGoBack = route.navigation.canGoBack();
  const { avatar, lastActivity, name } = useSelector(({ chatSlice }) => chatSlice.user);

  const handlePress = () => route.navigation.goBack();

  return (
    <View style={styles.container}>
      {canGoBack && (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={styles.arrowBox}>
            <CustomIcon name="leftArrow" />
          </View>
        </TouchableWithoutFeedback>
      )}

      {routeName === "Chat" && (
        <>
          <View style={styles.userBox}>
            <Image style={styles.avatar} source={{ uri: avatar }} />
            <View>
              <Text style={styles.user}>{name}</Text>
              <Text style={styles.status}>
                {lastActivity ? " Not active" : "Active now"}
              </Text>
            </View>
          </View>

          <View style={styles.iconBox}>
            <CustomIcon name="phone" />
            <CustomIcon name="videocall" />
          </View>
        </>
      )}
      {routeName !== "Chat" && (
        <>
          <Text style={styles.header}>{routeName}</Text>
          <View style={styles.iconBox}>
            <CustomIcon name="search" />
            <CustomIcon name="rooms" />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue[300],
    height: 120,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  iconBox: {
    width: 96,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 50,
    backgroundColor: COLORS.gray[300],
    marginRight: 12,
  },
  header: { ...TEXT.heading.h1, color: COLORS.plum[500] },
  userBox: { flexDirection: "row", alignItems: "center", flex: 1 },
  user: { ...TEXT.heading.h4, color: COLORS.plum[500] },
  status: {
    color: COLORS.white,
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 16.71,
  },
  arrowBox: { height: 42, justifyContent: "center" },
});
