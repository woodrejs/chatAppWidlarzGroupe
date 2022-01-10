import { App } from "./src";
import { useFonts } from "@use-expo/font";
import { FONTS } from "./style/fonts";
import { View, Text } from "react-native";

export default () => {
  const [isLoaded] = useFonts(FONTS);

  if (!isLoaded)
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );

  return <App />;
};
