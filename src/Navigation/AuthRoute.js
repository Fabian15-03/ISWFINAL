import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements';


import TiendaStack from './TiendaStack';
import PerfilStack from './ProfileStack';
import Promotions from './PromoStack';
import ServicioStack from "./ServiceStack";
import HistorialStack from "./HistoryStack";
import colors from '../Utils/colors';

const Tab = createBottomTabNavigator();

const TabBar = ()=> {
    return(
        <Tab.Navigator initialRouteName="tienda" tabBarOptions={{
            inactiveTintColor: colors.WHITE, activeTintColor: colors.ORANGE, 
            style:{
                borderTopWidth:3,
                borderTopColor: colors.ORANGE,
                alignItems:"center",
                height:"9.2%",
                backgroundColor: colors.BACKGROUNDCOLOR,
                paddingBottom: 5,
            },
            
            }}
            
            screenOptions={({route})=>({
                tabBarIcon:({color})=> mostrarIcono(route,color),
            })}
            
            >
            <Tab.Screen component={TiendaStack} name="tienda" options={{title: ""}}/>

            <Tab.Screen component={HistorialStack} name="historial" options={{title: ""}}/>

            <Tab.Screen component={ Promotions } name="promociones" options={{title: ""}}/>

            <Tab.Screen component={ServicioStack} name="servicio" options={{title: ""}}  />

            <Tab.Screen component={PerfilStack} name="cuenta" options={{title: ""}} />

        </Tab.Navigator>
    );
};

function mostrarIcono(route,color)
{
    let iconName ="";
    switch(route.name)
    {
        case "tienda":
        iconName = "clipboard-check-multiple-outline";
        break;

        case "cuenta":
        iconName ="account-circle-outline";

        break;
        case "historial":
        iconName ="clock-time-four-outline";
        break;

        case "servicio":
        iconName ="robot";
        break;

        case "promociones":
        iconName="sale";
        break;

    }

    return(
        <Icon type="material-community" name={iconName} size={32} color={color} iconStyle={{paddingTop:8}}/>
        
    )
}

export default function AuthRoute()
{
    return(
        <NavigationContainer>
            <TabBar/>
        </NavigationContainer>
    );
    
};
