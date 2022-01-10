import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Rooms from "../screens/Rooms";
import Chat from "../screens/Chat";

const Stack = createNativeStackNavigator();

const screenOptions = (route) => ({
  //header: place for custom header,
});

export default Navigation = () => {
  return (
    <NavigationContainer screenOptions={screenOptions}>
      <Stack.Navigator>
        <Stack.Screen name="Rooms" component={Rooms} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
