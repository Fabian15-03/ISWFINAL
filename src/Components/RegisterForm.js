import React , {useState} from 'react'
import { StyleSheet, Text, View , } from 'react-native';
import {Icon,Input,Button} from 'react-native-elements';
import {validaremail} from "../Utils/Utils";
import {isEmpty, size} from "lodash";
import {useNavigation} from "@react-navigation/native";
import * as firebase from "firebase";
import Loading from "../Components/Loading";
import colors from "../Utils/colors";

export default function RegisterForm(props) {
    const {toastref} = props;
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [repetirpassword,setrepetirpassword]=useState("");
    const navigation = useNavigation();
    const [show,setshow] = useState(false);
    const [loading , setloading] = useState(false);


    // Aqui la función que valida la creacion de cuenta 
    function crearcuenta(){
        if (isEmpty(email) || isEmpty(password) || isEmpty(repetirpassword)) {
            toastref.current.show("Todos los campos son obligatorios.");
        } else if (!validaremail(email)) {
            toastref.current.show("Correo no es válido.");
        } else if (password !== repetirpassword ){
            toastref.current.show("Las contraseñas deben ser iguales.");
        } else if (size(password) < 6 ){
            toastref.current.show("Las contraseñas deben ser de al menos 6 carácteres.");
        }
        else {
            setloading(true);

            firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then((response) =>{
                toastref.current.show("El usuario fue creado correctamente");
                setloading(false);
            })
            .catch((err)=>{
                setloading(false);
                toastref.current.show("Ha ocurrido un error o puede que este usuario este registrado o no cuenta con internet , intentelo nuevamente");
            })
        }
    }

    return (
        
             <View style={styles.container}>         
                <Input placeholder="Ingrese su correo"
                containerStyle={styles.input} 
                leftIcon={{
                    type:"material-community",
                    name:"account-circle-outline",
                    color: colors.ORANGE
                }}
                inputStyle={styles.data}
                onChangeText={(text)=>{
                    setemail(text);
                }}
                secureTextEntry={false}
                value={email}
                />
                <Input placeholder="Ingrese su contraseña"
                containerStyle={styles.input}
                leftIcon={{
                type:"material-community",
                    name:"security",
                    color: colors.ORANGE
                }}
                rightIcon ={{
                    type:"material-community",
                    name: show ? 'eye-off-outline': "eye-outline",
                    color: colors.ORANGE,
                    onPress: ()=> setshow(!show),
                }}
                inputStyle={styles.data}
                onChangeText={(text)=>{
                    setpassword(text);
                }}
                secureTextEntry={!show}
                value={password}
                />
             <Input placeholder="Repita la contraseña"
                containerStyle={styles.input}
                leftIcon={{
                type:"material-community",
                name:"security",
                color: colors.ORANGE
            }}
            rightIcon ={{
                type:"material-community",
                name: show ? 'eye-off-outline': "eye-outline",
                color: colors.ORANGE,
                onPress: ()=> setshow(!show),
            }}
            inputStyle={styles.data}
            onChangeText={(text)=>{
            setrepetirpassword(text);
            }}
            secureTextEntry={!show}
            value={repetirpassword}
            />
            <Button title="Crea tu cuenta"
                titleStyle={styles.titles1}
                containerStyle={styles.btnentradas1}
                buttonStyle={{backgroundColor:colors.ORANGE}}
                onPress ={()=> crearcuenta()}

            />
            <Loading isVisible={loading} />
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
    alignItems:'center',
    backgroundColor: colors.BACKGROUNDCOLOR,
    flex : 1, 
    marginTop: 15,

    },

    input:{
    width:"90%",
    height:60,
    marginTop:25,
    
    },

    btnentradas1:{
    width:"70%",
    marginTop:40,
    borderRadius:12,
    marginBottom:20,

    },

    btnentradas2:{
        width:"80%",
        marginTop:40,
        borderRadius:12,
    
        },

    titles1:{
        fontSize:24,
        fontWeight:"700",
        paddingTop:5,
        paddingBottom:5,

    },

    titles2:{
        fontSize:24,
        fontWeight:"bold",
        paddingTop:10,
        paddingBottom:10,
        color:"#222222"

    },

    data:{
        color: "#fff",
        fontWeight:"600",
     },
})

