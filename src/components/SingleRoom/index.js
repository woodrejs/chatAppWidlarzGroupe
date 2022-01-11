import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { TEXT } from "../../../style/texts";
import { COLORS } from "../../../style/colors";
import { useNavigation } from "@react-navigation/native";
import CustomIcon from "../CustomIcon";
import moment from "moment";
import { useQuery, gql } from "@apollo/client";

const GET_SINGLE_ROOM = gql`
  query getSingleRoom($id: String!) {
    room(id: $id) {
      id
      name
      user {
        id
        firstName
        lastName
      }
      messages {
        id
        body
        id
        insertedAt
        user {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export default SingleRoom = ({ id }) => {
  const navigation = useNavigation();
  const { loading, error, data } = useQuery(GET_SINGLE_ROOM, {
    variables: { id },
    pollInterval: 500,
  });

  if (!data) return null;

  const handlePress = () =>
    navigation.navigate("Chat", {
      roomId: data.room.id,
    });

  const status = isActive(data.room.messages[0].insertedAt);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <CustomIcon name="profile" />
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.title} numberOfLines={1}>
            {data.room.name}
          </Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            {data.room.messages[0].body}
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
    color: COLORS.blue[100],
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

function isActive(lastMessageDate) {
  const lastPost = moment(lastMessageDate).unix();
  const today = moment().unix();
  return secondsToTime(today - lastPost);
}
function secondsToTime(millis) {
  const days = Math.floor(millis / (24 * 60 * 60));
  const hours = Math.floor((millis / (60 * 60)) % 24);
  const minutes = Math.floor((millis / 60) % 60);

  if (days) return `${days} d ago`;
  if (hours) return `${hours} h ago`;
  if (minutes > 2) return `${minutes} m ago`;

  return 0;
}
