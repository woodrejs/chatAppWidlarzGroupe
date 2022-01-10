import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Navigation from "./routes";

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
