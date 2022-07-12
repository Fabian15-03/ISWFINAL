import React , {useState} from 'react'
import { StyleSheet, Text, View , Image , Alert} from 'react-native';
import CodeInput from "react-native-code-input";
import {useNavigation} from "@react-navigation/native";
import Loading from '../../Components/Loading';
import colors from "../../Utils/colors"
import {confirmarcodigo , obtenertoken , ObtenerUsuario , addRegistroEspecifico} from '../../Utils/Actions';


export default function ConfirmationNumber(props) {

    const {route} = props;
    const {verificationid} = route.params;
    const [loading, setloading ] = useState(false);
    const navigation = useNavigation();
    
    const confirmarCodigoSMS = async (code)=>{
        setloading(true);
        const resultado = await confirmarcodigo(verificationid, code);

        if (resultado) {
            const token = await obtenertoken();
        const {
            uid ,
            displayName ,
            photoURL ,
            email ,
            phoneNumber,
         }  = ObtenerUsuario();
        
        const registro = await addRegistroEspecifico("Usuarios" , uid , {
            token, 
            displayName,
            photoURL,
            email,
            phoneNumber,
            fechacreacion: new Date(),

        })
        setloading(false);
    } else {
        Alert.alert(
            "Error",
            "Favor válidar código introducido", 
            [{
                style:"default",
                text:"Entendido",
            },
        ])
        setloading(false);
    }
}
    return (
        <View style={styles.container}>
            <Image 
            source={require("../../../assets/logo.png")}
            style={styles.logo}
            />
            <Text style={styles.titulo}>Favor revise sus Mensajes e introduzca el código de confirmación</Text>

            <CodeInput 
            borderType='border-circle'
            activeColor = {colors.ORANGE}
            inactiveColor={colors.ORANGE} 
            autoFocus = {true}
             inputPosition="center" 
             size={50}
             codeLength={6} 
            containerStyle={{marginTop: 80 , borderColor: colors.ORANGE }}
            CodeInputStyle={{borderWidth:1.5}}
            onFulfill = {(code)=>{
                confirmarCodigoSMS(code);
            }}
            secureTextEntry
            />
            <Loading isVisible = {loading} text="" />


        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: "center",
        backgroundColor: colors.BACKGROUNDCOLOR,
        paddingHorizontal:20,

    },
    logo:{
        width:120,
        height:120,
        alignSelf:"center",
        marginTop:40,
    },
    titulo:{
        fontSize:20,
        textAlign:'center',
        color: colors.WHITE,
        fontWeight:"bold",
        marginVertical: 60,
        marginTop: 35,
    }
})


