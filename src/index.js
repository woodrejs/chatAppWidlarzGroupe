import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./routes";
import { useSelector } from "react-redux";
import ErrorModal from "./components/ErrorModal";
import { COLORS } from "../style/colors";
import { StyleSheet } from "react-native";

export const App = () => {
  const isError = useSelector(({ errorSlice }) => errorSlice.isError);

  return (
    <SafeAreaView style={styles.container}>
      {isError ? <ErrorModal /> : <Navigation />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.blue[300] },
});
