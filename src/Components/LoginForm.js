import React , {useState} from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import {Icon,Input,Button,Divider} from 'react-native-elements';
import {validaremail} from "../Utils/Utils";
import {isEmpty} from "lodash";
import {useNavigation} from "@react-navigation/native";
import Loading from "../Components/Loading";
import * as firebase from "firebase";
import colors from "../Utils/colors";
import {validarsesion , cerrarsesion} from "../Utils/Actions";
import { SafeAreaView } from 'react-native';


export default function LoginForm(props) {
    const {toastref} = props;
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const navigation = useNavigation();
    const [loading, setloading] = useState(false);
    const [show,setshow] = useState(true);

    // Funcion iniciar sesion 

    const iniciarsesion = ()=> 
    {
        if(isEmpty(email) || isEmpty(password))
        {
            toastref.current.show("Debe ingresar los valores de email y Password");
        }
        else if(!validaremail(email)){
            toastref.current.show("Ingrese un correo válido");
        }
        else {
            setloading(true);

            firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then((response)=>{
                setloading(false);
                toastref.current.show("Ha iniciado sesión correctamente");
                console.log(firebase.auth().currentUser);
            })
            .catch((err)=>{
                setloading(false);
                toastref.current.show("Ha ocurrido un error al intentar inciar sesión , verifique su conexion a internet");
            });
        }
    }

    // Vista del login bajo el logo.

    return (
        <SafeAreaView style={styles.container}> 
            <Text style={styles.texto}>Correo Electrónico :</Text>        
                <Input placeholder="Ingrese su correo"
                containerStyle={styles.input} 
                leftIcon={{
                    type:"material-community",
                    name:"account-circle-outline",
                    color:colors.ORANGE,
                }}
                inputStyle={styles.data}
                onChangeText={(text)=>{
                    setemail(text);
                }}
                secureTextEntry={false}
                value={email}
                />
            <Text  style={styles.texto}>Contraseña :</Text>
                <Input 
                placeholder="Ingrese su contraseña"
                containerStyle={styles.input}
                leftIcon={{
                type:"material-community",
                    name:"security",
                    color:colors.ORANGE,
                }}
                rightIcon ={{
                    type:"material-community",
                    name: show ? "eye-outline" :'eye-off-outline',
                    color:colors.ORANGE,
                    onPress: ()=> setshow(!show),
                }}
                inputStyle={styles.data}
                onChangeText={(text)=>{
                    setpassword(text);
                }}
                secureTextEntry={show}
                value={password}
                selectionColor={colors.WHITE}
                />
                <Button
                containerStyle={styles.btnentrada}
                buttonStyle={{backgroundColor:colors.ORANGE}}
                title="Ingresar"
                titleStyle={{fontSize:30 , fontWeight:"600"}}
                onPress ={()=> iniciarsesion()}
                />
            <Text style={styles.txtcrearcuenta}>
                ¿No tienes una cuenta? <Text style={styles.cuenta} 
                onPress={()=> navigation.navigate("register")}
                > {""} 
                Registrate</Text> 
            </Text>
            
            <Divider
            style={{backgroundColor:colors.ORANGE, height: 1 , width: "90%" , marginTop:10}}/>

            <Text style={styles.txto}>O</Text>

            <View style={styles.btnlogin}>
                <TouchableOpacity style={styles.btnloginsocialf}>
                    <Icon
                    size={38}
                    type="material-community"
                    name="facebook"
                    color={colors.WHITE}
                    backgroundColor="transparent"
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnloginsociala}>
                    <Icon
                    size={40}
                    type="material-community"
                    name="apple"
                    color={colors.BLACK}
                    backgroundColor="transparent"
                    onPress={()=> navigation.navigate("tienda")}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnloginsocialg}>
                    <Icon
                    size={38}
                    type="material-community"
                    name="google"
                    color={colors.WHITE}
                    backgroundColor="transparent"
                    />
                </TouchableOpacity>
            </View>
            <Loading isVisible={loading} />
        </SafeAreaView>
    )
}
    
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:colors.BACKGROUNDCOLOR,
        flex : 1, 
        justifyContent:"space-between",
        marginTop:10,
    },

    input:{
        width:"90%",
        height:50, 
    },

    btnentrada:{
        width:"60%",
        marginTop:20,
        borderRadius: 12,   
    },

    txtcrearcuenta:{
        marginTop:25,
        fontSize:17,
        color:colors.WHITE
    },
    
    cuenta:{

        color:colors.ORANGE,
        fontSize: 20,
        fontWeight:"600",
    },

    txto:{
        fontWeight: "bold",
        fontSize:22,
        marginTop:10,
        color:colors.WHITE
    },

    btnlogin:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingTop:20,
        width:'95%',
        marginBottom:20
    },

    btnloginsociala:{
        backgroundColor:colors.WHITE,
        paddingHorizontal: 35,
        paddingVertical:10,
        borderRadius:20,
    },
    btnloginsocialf:{
        backgroundColor:"#3B5998",
        paddingHorizontal: 35,
        paddingVertical:10,
        borderRadius:20,
  
    },
    btnloginsocialg:{
        backgroundColor:"#ea4335",
        paddingHorizontal: 35,
        paddingVertical:10,
        borderRadius:20,
    },
    data:{
       color: colors.WHITE,
       fontWeight:"600",
    },

    texto:{
        color:"#E7E0D4",
        fontSize:17,
        alignSelf:"flex-start",
        paddingTop:15,
        paddingLeft:30,
        fontWeight:"600",
        
    }
})

