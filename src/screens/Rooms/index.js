import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import SingleRoom from "../../components/SingleRoom";
import { COLORS } from "../../../style/colors";

import { gql, useQuery } from "@apollo/client";

const GET_USERS_ROOMS_ID = gql`
  {
    usersRooms {
      rooms {
        id
      }
    }
  }
`;

export default Rooms = () => {
  const { loading, error, data } = useQuery(GET_USERS_ROOMS_ID, {
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
