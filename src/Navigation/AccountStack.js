import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import ConfirmationNumber from '../Screens/Account/ConfirmationNumber';
import SendConfirmation from '../Screens/Account/SendConfirmation';

import colors from "../Utils/colors";

const Stack = createStackNavigator();

export default function AccountStack()
{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={SendConfirmation}
                name="sendconfirmation" 
                options={{title :"Confirma tu Número de teléfono",
                headerStyle:{backgroundColor: colors.ORANGE} , headerTintColor: colors.WHITE }}/>


                <Stack.Screen component={ConfirmationNumber} name="confirmationnumber" options={{title :"Confirmar Número"
                ,headerStyle:{backgroundColor: colors.BACKGROUNDCOLOR} , headerTintColor: colors.WHITE}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


