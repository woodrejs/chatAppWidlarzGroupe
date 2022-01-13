import React, { memo } from "react";
import { StyleSheet, View, ScrollView, Text, ActivityIndicator } from "react-native";
import SingleRoom from "../../components/SingleRoom";
import { COLORS } from "../../../style/colors";
import { useQuery } from "@apollo/client";
import { QUERIES } from "../../utils/queries";
import useError from "../../hooks/useError";
import { TEXT } from "../../../style/texts";
import Loader from "../../components/Loader";

export default Rooms = memo(() => {
  const { showErrorModal } = useError();
  const { loading, error, data } = useQuery(QUERIES.GET_USER_ROOMS);

  if (error) {
    showErrorModal("Something went wrong while retrieving data. Try again.");
  }

  if (loading) return <Loader color={COLORS.blue[100]} />;

  if (!data) return null;

  const rooms = data?.usersRooms?.rooms ?? [];

  if (!rooms.length)
    return (
      <View style={styles.box}>
        <Text style={styles.header}>No rooms</Text>
      </View>
    );

  return (
    <ScrollView style={styles.container}>
      {rooms.map(({ id, name }) => (
        <SingleRoom key={id} id={id} name={name} />
      ))}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: { paddingTop: 36, backgroundColor: COLORS.blue[100], flex: 1 },
  box: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  header: { ...TEXT.heading.h3, color: COLORS.gray[500] },
});
