import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import SingleRoom from "../../components/SingleRoom";
import { COLORS } from "../../../style/colors";

export default Rooms = () => {
  return (
    <ScrollView style={styles.container}>
      <SingleRoom />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 36, backgroundColor: COLORS.blue[100] },
});
