import { App } from "./src";
import { useFonts } from "@use-expo/font";
import { FONTS } from "./style/fonts";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default () => {
  const [isLoaded] = useFonts(FONTS);

  if (!isLoaded)
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );

  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
