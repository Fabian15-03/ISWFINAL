import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {NavigationContainer} from "@react-navigation/native";


import Login from "../Screens/Account/Login";
import Register from "../Screens/Account/Register";
import OnBoarding from "../Components/Onboarding";
import Tienda from "../Screens/Tienda/Tienda";

const Stack = createStackNavigator();



export default function NoAuthRoutes()
{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="onboarding" screenOptions={{headerShown:false}}>
                <Stack.Screen component={OnBoarding} name="onboarding" /> 
                <Stack.Screen component={Login} name="login" /> 
                <Stack.Screen component={Register} name="register" /> 
                <Stack.Screen component={Tienda} name="tienda" /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}
