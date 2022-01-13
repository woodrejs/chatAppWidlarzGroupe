import React, { useCallback,memo } from "react";
import { Alert, Linking, TouchableOpacity, View } from "react-native";

export default OpenURLWrapper = memo(({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>{children}</View>
    </TouchableOpacity>
  );
});
