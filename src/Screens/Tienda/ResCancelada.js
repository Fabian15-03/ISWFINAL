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


export default function ResCancelada() {
    const navigation = useNavigation();
  return (
    <NativeBaseProvider>
    <SafeAreaView style={styles.container}>
    <Text style={{fontSize:24,fontWeight:'bold',alignSelf:"center", color:colors.ORANGE , paddingTop:"5%"}}>Reservacion Cancelada</Text>
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
            Su Reserva fue Cancelada correctamente</Text>




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



