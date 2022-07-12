import React , {useState , useRef} from 'react'
import { View, Text , TextInput , Image , StyleSheet, Alert} from 'react-native';
import {Button, Icon } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {isEmpty} from "lodash";
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal';
import Firebaserecaptcha from "../../Utils/Firebaserecaptcha";
import {enviarconfirmacionphone} from '../../Utils/Actions';
import colors from "../../Utils/colors"



export default function SendConfirmation() {

    const [country, setcountry] = useState("PE")
    const [callingcode , setcallingcode ] = useState("51")
    const [phone, setphone] = useState("")
    const recaptchaVerifier = useRef();
    const inputphone = useRef();
    const navigation = useNavigation();

    const enviarconfirmacion =  async ()=>{
        if(!isEmpty(phone)){
            const numero = `+${callingcode}${phone}`;
            console.log(numero);
            const verificationid = await enviarconfirmacionphone(
                numero,
                recaptchaVerifier
            );
            if (!isEmpty(verificationid)){
                navigation.navigate("confirmationnumber" , {verificationid});
            }else{
                Alert.alert(
                    "Verificacion",
                    "Por favor introduzca un número de teléfono válido",
                    [{
                        style:"cancel",
                        text:"Entendido",
                        onPress:()=>{
                            inputphone.current.clear();
                            inputphone.current.focus();
                        }
                    }]
                )
            }
        }
    }
    return (
        <View style={styles.container}>
            <Image
            source={require("../../../assets/logo.png")}
            style={styles.imagen}
            />
            <View style={styles.panel}> 
                <View style={{
                    borderBottomColor:"#F06E39",
                    borderBottomWidth:2,
                    width:250,

                }}/>

                <Text style={styles.titulo}>Por favor ingresa tu número de Whatsapp :</Text>

                <View style={styles.viewtelefono}>
                    <CountryPicker 
                        theme={DARK_THEME}
                        withFlag
                        withCallingCode
                        withFilter
                        withCallingCodeButton
                        countryCode = {country}
                        style={styles.cc}
                        onSelect={(Country) => {
                            setcountry(Country.cca2);
                            setcallingcode(...Country.callingCode);
                        }}
                    />
                        <Text style={{color:"#fff"}}> | </Text>
                        <TextInput 
                        placeholder="Número de Whatsapp" 
                        style={styles.textin} 
                        placeholderTextColor="#fff" 
                        onChangeText={(text)=>setphone(text)} 
                        value={phone} 
                        ref={inputphone}/>

        
                    </View>
                <View style={styles.panelinterno}>
                        
                
                    <Button title="Confirmar Número" buttonStyle={{backgroundColor: "#ff6624", 
                    marginHorizontal:20 ,
                    width:350,
                    height:65,
                    borderRadius:"20%",}} 
                    containerStyle={{marginVertical:20}}
                    onPress={()=>enviarconfirmacion()}
                    />
                </View>
            </View>
            <Firebaserecaptcha referencia={recaptchaVerifier}/>

        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:"#222222",
    },

    imagen:{
        height:120,
        width:120,
        alignSelf:"center",
        marginTop: 35,
        marginBottom:25,
    },
    panel:{
        flex:1,
        backgroundColor:"#222222",
        paddingTop :15,
        alignItems:"center",

    },
    panelinterno:{
        flex:1,
        justifyContent:"center",
        marginHorizontal:20,
        

    },
    titulo:{
        fontSize:17,
        textAlign:"center",
        color:"#fff",
        fontWeight:"bold",
        marginTop:35,

    },
    viewtelefono:{
        flexDirection: "row",
        alignItems:"center",
        borderRadius:15,
        height:70,
        marginHorizontal:40,
        paddingHorizontal:20,
        backgroundColor:"#444444",
        marginTop:55,

    },
    textin :{
        color:"#fff",
        fontWeight:"700",
        fontSize:18,
        width:"80%",
        height:50,
        marginLeft:5,
        
        
    },

})
