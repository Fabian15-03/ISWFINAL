import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from "../../../Utils/colors"

export default function Yourlikes() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.BACKGROUNDCOLOR
    },
})
