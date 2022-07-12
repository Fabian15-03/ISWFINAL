import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from "../../../Utils/colors"
import {AirbnbRating } from 'react-native-elements';
import { SafeAreaView } from 'react-native';

export default function Verification() {
    return (
        <SafeAreaView style={styles.container}>
            <AirbnbRating/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.BACKGROUNDCOLOR
    }
})