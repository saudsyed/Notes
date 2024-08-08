import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../Screen/HomeScreen";
import OtherScreen from "../Screen/OtherScreen";

const Stack = createNativeStackNavigator();


const AppStack = () => {
   return( 
   <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'All Notes',
                }}
            />
            <Stack.Screen 
                name="other"
                component={OtherScreen}
                options={{
                    title: 'Note',
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
   );
};

export default AppStack;