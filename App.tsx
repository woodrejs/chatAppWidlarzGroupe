import { App } from "./src";
import { useFonts } from "@use-expo/font";
import { FONTS } from "./style/fonts";

export default () => {
  const [isLoaded] = useFonts(FONTS);

  return <App />;
};
