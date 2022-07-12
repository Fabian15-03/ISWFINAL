import React from 'react'
import { StyleSheet, View , SafeAreaView} from 'react-native'
import { Divider } from 'react-native-elements';
import colors from "../../Utils/colors"
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Center,
  HStack,
  Text,
  VStack,
  Stack,
  NativeBaseProvider,
} from "native-base"
import { MaterialIcons, Ionicons } from "@expo/vector-icons"
import { ScrollView } from 'react-native';
import {Box_Prueba} from '../../Components/RestaurantesForm1';
import { justifyContent } from 'styled-system';


export default function Historial() {
    return (
      <SafeAreaView style={styles.container}>
        <NativeBaseProvider>
          <View style={{width:"100%" , padding:15 }}>
            <HStack space={1}>
              <Icon
                as={<MaterialIcons name="history" />}
                color={colors.ORANGE}
                size={"md"}
              />
            <Heading color={colors.ORANGE} fontSize="2xl" mt={1} alignSelf="center"  >
              Historial de Reservaciones
            </Heading>
            </HStack>

           
            <View style={styles.box}>
            <HStack space={1} mt={3}>
              <Icon
                as={<Ionicons name="radio-button-on"/>}
                color={"red.500"}
                size={"sm"}
                ml={2}
              />
            <Heading color={colors.BLACK} fontSize="lg" >
              Pendiente
            </Heading>
            </HStack>
            
            <Text pl={8}> Aqui van las reservaciones actuales.</Text>


            </View>
            <Divider style={{backgroundColor:colors.ORANGE, height: 3 , width: "96%" , marginTop:10 , alignSelf:"center"}}/>
            <Divider style={{backgroundColor:colors.ORANGE, height: 3 , width: "96%" , marginTop:10 , alignSelf:"center"}}/>

            <HStack space={1} mt={3}>
              <Icon
                as={<Ionicons name="backspace"/>}
                color={"red.500"}
                size={"sm"}
                ml={2}
              />
            <Heading color={colors.ORANGE} fontSize="lg" >
              Anteriores
            </Heading>
            </HStack>
            
            <ScrollView>
            <View style={{alignItems:"center"}}>
            <Box_Prueba/>
            </View>
            </ScrollView>
            </View>
            
            
            </NativeBaseProvider>
            
         

        

    </SafeAreaView>
  )
  }

  
  const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.BACKGROUNDCOLOR, 
  },
  box:{
    width:"100%",
    height:"35%",
    justifyContent:"flex-start",
    borderWidth:3,
    borderColor:colors.ORANGE,
    borderRadius:25,
    marginTop:"2%",
    backgroundColor:"white"
},

  })

