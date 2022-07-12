import React from "react";
import { StyleSheet , Text , View , TouchableHighlight } from 'react-native';
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import colors from "../Utils/colors";


export default function ShopBottom() {

    const navigation = useNavigation();

    return (
        <TouchableHighlight
        onPress ={ ()=> {
            navigation.navigate("mitienda");
            
        }}
        >
            
        <Icon name="store" color="#fff" size={35} style={{inactiveTintColor:"#fff", activeTintColor:"#ff6624",}}/>

        </TouchableHighlight>
    )
}

const  styles =StyleSheet.create ({
   

})
