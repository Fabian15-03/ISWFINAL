import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import Servicio from "../Screens/Services/Services";

const Stack = createStackNavigator();

export default function ServiceStack()
{
    return(
        <Stack.Navigator>
            <Stack.Screen component={Servicio} name="servicio" options={{headerShown:false}}/>
        </Stack.Navigator>

    );
};
