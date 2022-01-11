import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import SingleRoom from "../../components/SingleRoom";
import { COLORS } from "../../../style/colors";
import { useQuery } from "@apollo/client";
import { QUERIES } from "../../utils/queries";

export default Rooms = () => {
  const { loading, error, data } = useQuery(QUERIES.GET_USER_ROOMS, {
    pollInterval: 500,
  });

  if (loading)
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );

  if (!data) return null;

  return (
    <ScrollView style={styles.container}>
      {data.usersRooms.rooms.map(({ id }) => (
        <SingleRoom key={id} id={id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 36, backgroundColor: COLORS.blue[100] },
});
