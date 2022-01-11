import React from "react";
import { StyleSheet } from "react-native";
import Navigation from "./routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Navigation />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
