import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { TEXT } from "../../../style/texts";
import { COLORS } from "../../../style/colors";
import { useNavigation } from "@react-navigation/native";
import CustomIcon from "../CustomIcon";
import { useQuery, useSubscription, gql } from "@apollo/client";
import { QUERIES } from "../../utils/queries";
import { isActive } from "./index.utils";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/chat.slice";
import useError from "../../hooks/useError";
import { useIsFocused } from "@react-navigation/native";

export default SingleRoom = ({ id, name }) => {
  const [status, setStatus] = useState(true);
  const [lastMessage, setLastMessage] = useState("");
  const dispatch = useDispatch();
  const { showErrorModal } = useError();
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const { data: queryData, error: queryError } = useQuery(QUERIES.GET_SINGLE_ROOM, {
    variables: { id },
    fetchPolicy: "network-only",
  });
  const { data: subscriptionData, error: subscriptionError } = useSubscription(
    QUERIES.CHAT_SUBSCRIPTION,
    {
      variables: { roomId: id },
    }
  );

  const handlePress = () => {
    const userName = `${queryData.room.user.firstName} ${queryData.room.user.lastName}`;
    const lastActivity = status ? true : false;
    const avatar = null;
    dispatch(setUser([userName, lastActivity, avatar]));

    navigation.navigate("Chat", {
      userId: queryData.room.user.id,
      roomId: id,
    });
  };

  useEffect(() => {
    if (queryData) {
      setLastMessage(queryData.room.messages[0].body);
      setStatus(isActive(queryData.room.messages[0].insertedAt));
    }
  }, [queryData]);

  useEffect(() => {
    if (subscriptionData) {
      setLastMessage(subscriptionData.messageAdded.body);
    }
  }, [subscriptionData]);

  useEffect(() => {
    if (subscriptionData && isFocused) {
      setStatus(isActive(subscriptionData.messageAdded.insertedAt));
    }
  }, [isFocused]);

  if (queryError && subscriptionError) {
    showErrorModal("Something went wrong while retrieving data. Try again.");
  }

  if (!queryData) return null;

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={{
          ...styles.container,
          backgroundColor: status ? COLORS.white : COLORS.plum[500],
        }}
      >
        <View style={styles.avatar}>
          <CustomIcon name="profile" />
        </View>
        <View style={styles.contentBox}>
          <Text
            style={{
              ...styles.title,
              color: status ? COLORS.black : COLORS.white,
            }}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text
            style={{
              ...styles.subTitle,
              color: status ? COLORS.black : COLORS.blue[100],
            }}
            numberOfLines={1}
          >
            {lastMessage}
          </Text>
        </View>
        <View style={styles.statusBox}>
          {status ? (
            <Text style={styles.time}>{status}</Text>
          ) : (
            <View style={styles.status} />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 12,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: "relative",
  },
  avatar: {
    height: 64,
    width: 64,
    marginRight: 16,
    borderRadius: 50,
  },
  contentBox: { justifyContent: "center" },
  title: {
    ...TEXT.heading.h3,
    marginBottom: 4,
    color: COLORS.white,
    maxWidth: "80%",
  },
  subTitle: {
    fontSize: 14,
    fontStyle: "normal",
    lineHeight: 16.71,

    maxWidth: "80%",
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
