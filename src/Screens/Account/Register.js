import React , {useRef} from 'react';
import {View,Text,StyleSheet,StatusBar,Image, requireNativeComponent} from 'react-native';
import RegisterForm from '../../Components/RegisterForm';
import Toast from "react-native-easy-toast";
import colors from "../../Utils/colors"

export default function Registrar() {
    const toastref = useRef();
    return (
        <View style={styles.container}> 
        <StatusBar/>
        <Image source ={require("../../../assets/logo.png")}
        style={styles.imglogo}
        />
        <Text style={styles.textobanner}>Registrate :</Text>
        <Text style={styles.hola}>Aqui puedes crear tu cuenta!</Text>
            <RegisterForm toastref={toastref}/>
            <Toast ref = {toastref} position="center" opacity= {0.9} />

        </View>
    )
}
const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor : colors.BACKGROUNDCOLOR,
    },

    imglogo:{
        width : 120,
        height : 120,
        marginTop: 80,
        alignSelf :'center',
    },

    hola:{
        color: colors.WHITE,
        fontSize:19,
        paddingTop:9,
        paddingLeft:50,

    },
    textobanner:{
        fontWeight:'bold',
        fontSize:43,
        color:colors.ORANGE,
        paddingTop:32,
        paddingBottom: 2,
        paddingLeft:50,
        
    }
})
