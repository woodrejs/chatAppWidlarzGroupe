import React from "react";
import { StyleSheet } from "react-native";
import Navigation from "./routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import ErrorModal from "./components/ErrorModal";

export const App = () => {
  const error = useSelector(({ errorSlice }) => errorSlice.error);

  if (error) return <ErrorModal />;

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
