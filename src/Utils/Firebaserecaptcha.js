import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {FirebaseRecaptchaVerifierModal} from "expo-firebase-recaptcha";

import Constants from "expo-constants";

export default function Firebaserecaptcha(props) {
    
    const {referencia} = props;

    return (
     
        <FirebaseRecaptchaVerifierModal
        ref={referencia}
        title="Confirma que no eres un Robot"
        cancelLabel="x"
        firebaseConfig={Constants.manifest.extra.firebase}
        />
    )
}

const styles = StyleSheet.create({})

