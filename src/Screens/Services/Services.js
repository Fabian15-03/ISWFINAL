import React from 'react'
import { StyleSheet, View , SafeAreaView} from 'react-native'
import { Divider } from 'react-native-elements';
import colors from "../../Utils/colors";
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
  IconButton,
} from "native-base"
import { MaterialIcons, Ionicons , MaterialCommunityIcons } from "@expo/vector-icons"
import { ScrollView } from 'react-native';
import {Box_Prueba} from '../../Components/RestaurantesForm1';
import { TouchableRipple } from 'react-native-paper';

export default function Servicio() {
    return (
      <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <View style={{width:"100%" , padding:15 }}>
          <HStack space={1}>
            <Icon
              as={<MaterialCommunityIcons name="robot" />}
              color={colors.ORANGE}
              size={"md"}
            />
          <Heading p={1} color={colors.ORANGE} fontSize="2xl" alignSelf="center"  >
           Atención al Cliente
          </Heading>
          </HStack>

          <Divider style={{backgroundColor:colors.ORANGE, height: 2 , width: "96%" , marginTop:10 , alignSelf:"center"}}/>

          <Text bold mt={2} fontSize="xl" color={colors.WHITE}>¿Tuvo algun inconveniente con su ultima reservacion ? </Text>
            <View style={{alignItems:"center"}}>
              <Box_Prueba/>
            </View>

          <Text bold mt={5} fontSize="xl" color={colors.WHITE}>¿En que podemos ayudarte? </Text>
          <TouchableRipple onPress={()=> navigation.navigate("yourlikes")}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color={colors.ORANGE} size={26}/>
            <Text style={styles.menuItemText}>Tus Gustos</Text>
          </View>
        </TouchableRipple>
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
  title:{
    color:colors.ORANGE,
    fontSize:19,
    fontWeight:"700",
    marginLeft:7,
  },
  })
