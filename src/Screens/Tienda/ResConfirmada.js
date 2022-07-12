import { View, Text, Image , StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../Utils/colors'
import { Button } from 'react-native-paper'
import { Select,Center,FormControl,CheckIcon,WarningOutlineIcon,NativeBaseProvider } from 'native-base';
import { RestaurantesForm } from '../../Components/RestaurantesForm';
import { backgroundColor } from 'styled-system'
import {useNavigation} from "@react-navigation/native";
import { Icon } from 'react-native-elements'

export default function ResConfirmada() {
    const navigation = useNavigation();
  return (
    <NativeBaseProvider>
    <SafeAreaView style={styles.container}>
    <Text style={{fontSize:24,fontWeight:'bold',alignSelf:"center", color:colors.ORANGE , paddingTop:"5%"}}>Reservacion Confirmada</Text>
    <View style={{alignSelf:"center" , marginTop:100}}>
      <Icon
        reverse
        name='checkmark-circle-outline'
        type='ionicon'
        color={colors.ORANGE}
        size={80}
        />
        </View>
        <View style={{alignSelf:"center" , marginTop:100}}>
      <Text style={{paddingLeft:25,paddingRight:25,color:colors.WHITE, fontSize:24}}>
            Su Reserva fue Confirmada por parte del Restaurante</Text>
        <Text style={{paddingLeft:25,paddingRight:25,color:colors.WHITE , fontSize:16 ,  marginTop:20}}>
            Favor de acercarse a la hora acordada ademas de brindar su nombre al restaurante</Text>
            <Text style={{paddingLeft:25,paddingRight:25,color:colors.WHITE , fontSize:16 ,  marginTop:20}}>
            En caso de cancelar la reserva , cuentas con 15 minutos hecha la reserva</Text>
        </View>
        <Button mode="contained" color={colors.ORANGE} style={{width:"90%" , alignSelf:"center",marginTop:20}}  onPress={()=> navigation.navigate("cancelada")}>
        Cancelar Reserva 
    </Button>
    <Button mode="contained" color={colors.BACKGROUNDCOLOR} contentStyle={{}} style={{width:"90%" , alignSelf:"center",marginTop:20}}  onPress={()=> navigation.navigate("rechazada")}>
        rechazar Reserva 
    </Button>
    </SafeAreaView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"flex-start",
            backgroundColor: colors.BACKGROUNDCOLOR,
        },
});


