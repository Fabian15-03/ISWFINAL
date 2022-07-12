import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import {Overlay} from "react-native-elements";
import {Wave} from "react-native-animated-spinkit";
import colors from "../Utils/colors";

// Creacion del loading mediante Libreria.

export default function Loading(props) {
    const {isVisible} = props;
    return (
        <Overlay isVisible={isVisible} overlayStyle={styles.overlay} >
            <View style={styles.view}>
                <Wave size={60} color={colors.ORANGE}/>
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    overlay:{
        backgroundColor:"rgba(0,0,0, 0.85)",
        borderWidth : 1,
        borderColor:"#999999",
        borderRadius: 20,
        width:"40%",
        height: Dimensions.get("window").height/6,
    },
    view:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
})

