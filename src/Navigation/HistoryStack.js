import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

import Historial from "../Screens/History/History";

const Stack = createStackNavigator();

export default function HistoryStack()
{
    return(
        <Stack.Navigator>
            <Stack.Screen component={Historial} name="historial" options={{headerShown:false}}/>
        </Stack.Navigator>
    );
};
