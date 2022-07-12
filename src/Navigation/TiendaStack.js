import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import Tienda from "../Screens/Tienda/Tienda";
import Reservar from "../Screens/Tienda/Reservar";
import ResCancelada from "../Screens/Tienda/ResCancelada";
import ResConfirmada from "../Screens/Tienda/ResConfirmada";
import ResRechazada from "../Screens/Tienda/ResRechazada";




const Stack = createStackNavigator();

export default function TiendaStack()
{
    return(
        <Stack.Navigator initialRouteName='tienda'>
            
            <Stack.Screen component = {Tienda} name = 'tienda' options ={{headerShown:false}}/>
            <Stack.Screen component = {Reservar} name = 'reservar' options ={{headerShown:false}}/>
            <Stack.Screen component = {ResCancelada} name = 'cancelada' options ={{headerShown:false}}/>
            <Stack.Screen component = {ResConfirmada} name = 'confirmada' options ={{headerShown:false}}/>
            <Stack.Screen component = {ResRechazada} name = 'rechazada' options ={{headerShown:false}}/>


        </Stack.Navigator>
    );
};
