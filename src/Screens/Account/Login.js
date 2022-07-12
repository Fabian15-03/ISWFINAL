import React , {useRef} from 'react';
import {View,Text,StyleSheet,StatusBar,Image} from 'react-native';
import LoginForm from "../../Components/LoginForm";
import Toast from "react-native-easy-toast";
import colors from "../../Utils/colors"
import { SafeAreaView } from 'react-native';

export default function Login()
{
    const toastref = useRef();

    return(
        <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.BACKGROUNDCOLOR}/>
        <Image source ={require("../../../assets/logo.png")}
        style={styles.imglogo}
        />
        <Text style={styles.textobanner}>Bienvenido :</Text>
        <Text style={styles.hola}>Hola, nos encanta tenerte aqui!!</Text>
            <LoginForm toastref={toastref}/>
            <Toast ref = {toastref} position="center" opacity= {0.9} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor : colors.BACKGROUNDCOLOR,
    },

    imglogo:{
        width : 85,
        height : 85,
        marginTop: 20,
        alignSelf :'center',
    },

    hola:{
        color:'#fff',
        fontSize:15,
        paddingTop:7,
        paddingLeft:35,
        fontWeight:"600",
        

    },
    textobanner:{
        fontWeight:'bold',
        fontSize:28,
        color: colors.ORANGE,
        paddingTop:18,
        paddingBottom: 2,
        paddingLeft:35,
        
    }
})
