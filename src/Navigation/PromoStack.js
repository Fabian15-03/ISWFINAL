import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Promociones from "../Screens/Promotions/Promos";
import Editarproducto from "../Screens/Promotions/EditarProducto";
import colors from "../Utils/colors"

const Stack = createStackNavigator();

export default function Promotions()
{
    return(
        <Stack.Navigator >
    
            <Stack.Screen component={Promociones} name="promo" options={{headerShown:false}}/>

            <Stack.Screen component={Editarproducto} name="editproducto" options={{title:"Editar Producto",}}/>

        </Stack.Navigator>


    );
};
