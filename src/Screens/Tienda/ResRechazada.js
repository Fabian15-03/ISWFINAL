import { View, Text, Image , StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../Utils/colors'
import { Button } from 'react-native-paper'
import { Select,Center,FormControl,CheckIcon,WarningOutlineIcon,NativeBaseProvider } from 'native-base';
import { RestaurantesForm } from '../../Components/RestaurantesForm';
import { backgroundColor } from 'styled-system'
import { Icon } from 'react-native-elements'
import {useNavigation} from "@react-navigation/native";


export default function Reservar() {
    const navigation = useNavigation();
  return (
    <NativeBaseProvider>
   <SafeAreaView style={styles.container}>
    <Text style={{fontSize:24,fontWeight:'bold',alignSelf:"center", color:colors.ORANGE , paddingTop:"5%"}}>Reservacion Rechazada</Text>
    <View style={{alignSelf:"center" , marginTop:100}}>
      <Icon
        reverse
        name='close-circle-outline'
        type='ionicon'
        color={colors.ORANGE}
        size={80}
        />
        </View>
        <View style={{alignSelf:"center" , marginTop:100}}>
      <Text style={{paddingLeft:25,paddingRight:25,color:colors.WHITE, fontSize:20}}>
            Su Reserva fue Confirmada por parte del Restaurante</Text>
        <Text style={{paddingLeft:25,paddingRight:25,color:colors.WHITE , fontSize:16 ,  marginTop:20}}>
            Ocurrio un inconveniente con el Restaurante , por favor intentelo nuevamente en otro momento o comuniquese a este numero : 987654321</Text>
        </View>
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







