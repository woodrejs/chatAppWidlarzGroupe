import { App } from "./src";
import { useFonts } from "@use-expo/font";
import { FONTS } from "./style/fonts";
import { View, Text } from "react-native";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/utils/client";
import { Provider } from "react-redux";
import store from "./src/redux/store";

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
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  );
};
