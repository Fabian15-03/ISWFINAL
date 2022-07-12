import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Animated, TouchableOpacity } from 'react-native'
import colors from "../Utils/colors"
import Svg, { G, Circle } from 'react-native-svg'
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";


export default NextButton = ({ percentage, scrollTo }) => {

    const size = 130;
    const strokeWidth = 6;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef(null);
    const navigation = useNavigation();

    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true,

        }).start();
    };

    useEffect(() => {
        animation(percentage);
    }, [percentage]);

    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;

            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        }, [percentage])
    });


    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={center}>
                    <Circle stroke="#fff" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />

                    <Circle
                        ref={progressRef}
                        stroke={colors.ORANGE}
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}

                    />
                </G>
            </Svg>
            <TouchableOpacity onPress={scrollTo} onPress={() => navigation.navigate('login')} style={styles.button} activeOpacity={0.6}>
                <AntDesign name="arrowright" size={32} color={colors.WHITE} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
    },
    button: {
        position: 'absolute',
        backgroundColor: colors.ORANGE,
        borderRadius: 100,
        padding: 20,


    }
})
