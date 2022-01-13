import React from "react";
import Navigation from "./routes";
import ErrorModal from "./components/ErrorModal";
import { useSelector } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./style/colors";
import { StyleSheet } from "react-native";
import { setClient } from "./utils/client";

export const App = () => {
  const isError = useSelector(({ errorSlice }) => errorSlice.isError);
  const token = useSelector(({ authSlice }) => authSlice.token);

  if (isError) return <ErrorModal />;

  return (
    <SafeAreaView style={styles.container}>
      <ApolloProvider client={setClient(token)}>
        <Navigation />
      </ApolloProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.blue[300] },
});
