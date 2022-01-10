import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Rooms from "../screens/Rooms";
import Chat from "../screens/Chat";

import CustomHeader from "../components/CustomHeader";

const Stack = createNativeStackNavigator();

export default Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ header: (route) => <CustomHeader route={route} /> }}
      >
        <Stack.Screen name="Rooms" component={Rooms} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};