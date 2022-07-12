import React from 'react'
import { StyleSheet, View , SafeAreaView} from 'react-native'
import SearchBar from "react-native-dynamic-search-bar";
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



export default function Promos() {
    return (
        
        <SafeAreaView style={styles.container}>
        <NativeBaseProvider>
          <View style={{width:"100%" , padding:15 }}>
            <HStack space={1}>
              <Icon
                as={<MaterialCommunityIcons name="sale" />}
                color={colors.ORANGE}
                size={"md"}
              />
            <Heading color={colors.ORANGE} fontSize="3xl" alignSelf="center"  >
              Promociones
            </Heading>
            </HStack>

            <SearchBar
                style={styles.search}
                placeholder="Buscar"
                onPress={() => alert("onPress")}
                onChangeText={(text) => console.log(text)}
                fontWeight={'500'}   
            />
            <Divider style={{backgroundColor:colors.ORANGE, height: 2 , width: "96%" , marginTop:10 , alignSelf:"center"}}/>
            
            <Text bold color={colors.WHITE}>Poner cajas de imagenes y texto como slogans para las promociones </Text>

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
    fontSize:25,
    fontWeight:"700",
    marginLeft:7,
  },
  search:{
    height:32,
    marginTop:"3%",
    backgroundColor:"#bdc3c7"
},
  })