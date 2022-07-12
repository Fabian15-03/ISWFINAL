import { View, Text, Image , StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../Utils/colors'
import { Button } from 'react-native-paper'
import {useNavigation} from "@react-navigation/native";
import { Select,Center,FormControl,CheckIcon,WarningOutlineIcon,NativeBaseProvider } from 'native-base';
import { RestaurantesForm } from '../../Components/RestaurantesForm';
import { backgroundColor } from 'styled-system'


export default function Reservar() {

  const navigation = useNavigation();
  return (
    <NativeBaseProvider>
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:24,fontWeight:'bold',alignSelf:"center", color:colors.ORANGE , paddingTop:"5%"}}>Chilis Jockey Plaza</Text>
      <Text style={{fontSize:18,fontWeight:'bold',color:colors.ORANGE , paddingTop:"5%" , marginLeft:25}}>Descripción:</Text>
      <Text style={{paddingLeft:25,paddingRight:25,color:colors.WHITE}}>
            Chili's Grill & Bar es una cadena de restaurantes con más de 1600 sucursales, situadas la mayoría en los Estados Unidos.
            Fue fundada por Larry Lavine y la compañía que lo compró actualmente por Brinker International, quien también posee los restaurantes,
            On the Border Mexican Grill & Cantina, Maggiano's Little Italy y Romano's Macaroni Grill.</Text>
      <Image source={require("../../../assets/logos/chilis.png")} style={{width:"90%" , height:"25%" , alignSelf:"center",marginTop:10,marginBottom:10}}/>
      <Text  style={{paddingLeft:25,paddingRight:25,color:colors.ORANGE,fontSize:15,paddingBottom:20}}>Cantidad de Personas :</Text>
      
     <Example2 />
     
          


      <Text style={{paddingLeft:25,paddingRight:25,color:colors.ORANGE,fontSize:1,marginTop:20}}>Horarios Disponibles :</Text>
      
      <View style={{flexDirection:"row" , justifyContent:"space-between" , paddingLeft:15,paddingRight:15}}>
        <Button icon="badge-account-outline" color={colors.WHITE} mode="contained" disabled  onPress={() => console.log('Pressed')}>
            10:30
        </Button>
        <Button icon="badge-account-outline" color={colors.WHITE} mode="contained" onPress={() => console.log('Pressed')}>
            12:30
        </Button>
        <Button icon="badge-account-outline" color={colors.WHITE} mode="contained"disabled onPress={() => console.log('Pressed')}>
            3:30
        </Button>
        <Button icon="badge-account-outline" color={colors.WHITE} mode="contained" onPress={() => console.log('Pressed')}>
            5:30
        </Button>
      </View>
    <Button icon="book-open-outline" mode="contained" color={colors.ORANGE} style={{width:"90%" , alignSelf:"center",marginTop:20}}  onPress={()=> navigation.navigate("confirmada")}>
        Reservar
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

const Example2 = () => {
  return(
   <Center>
      <FormControl w="3/4" maxW="300" isRequired >
        <Select minWidth="200" defaultValue='1 Persona' color={colors.ORANGE} placeholderTextColor={colors.WHITE} accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: colors.WHITE,
        endIcon: <CheckIcon size={5} />
      }} mt="1">
          <Select.Item label="1 Persona" value="1" />
          <Select.Item label="2 Personas" value="2" />
          <Select.Item label="3 Personas" value="3" />
          <Select.Item label="4 Personas" value="4" />
          <Select.Item label="5 a más Personas" value="n" />
        </Select>
      </FormControl>
    </Center>)
};

