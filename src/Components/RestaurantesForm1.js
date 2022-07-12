import React from 'react'
import { StyleSheet, View , ScrollView} from 'react-native'
import colors from "../Utils/colors"
import {TouchableRipple , Text} from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import {
    Box,
    Heading,
    Icon,
    AspectRatio,
    Image,
    Center,
    HStack,
    VStack,
    Stack,
    NativeBaseProvider,
    Badge,
  } from "native-base"
  import { MaterialIcons, Ionicons } from "@expo/vector-icons"


export default function RestaurantesForm() {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            
            <TouchableRipple onPress={()=> navigation.navigate("")}>
                <NativeBaseProvider>
                  <HStack>
                    <Center flex={1}>    
                        <Box_Prueba/>
                    </Center>
                  </HStack>
                </NativeBaseProvider>
            </TouchableRipple>
      </ScrollView>
        </SafeAreaView>
    )
}

export const Box_Prueba = () => {
    return (
    
      <Box
        marginTop={3}
        width={"85%"}
        shadow={1}
        borderRadius={20}
        backgroundColor={"gray.50"}
      >
        <Box>
          <AspectRatio ratio={6/1}>
            <Image
              roundedTop="lg"
              source={require("../../assets/chilis.png")}
              width={"100%"}
              height={"100%"}
              resizeMode={"center"}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="red.500"
            _text={{
              color: "white",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom={0}
            px={2}
            py={1}
          >
          Tus Gustos
          </Center>
          <Center
            p={1}
            rounded="full"
            bg="white"
            boxSize={10}
            position="absolute"
            borderWidth={1}
            borderColor={"red"}
            right={0}
            m={2}
          >
            <Image
                size={"100%"}
                resizeMode={"contain"}
                alt="fallback text"
                borderRadius={100}
                source={require("../../assets/chillis-logo.png")}
                />
          </Center>
        </Box>
        <Stack p={2} space={0}>
          <Stack space={1}>
            <Heading size="md" ml={-1}>
              Chili's Jockey Plaza
            </Heading>
            <Heading
              size="xs"
              color={"grey"}
              fontWeight="400"
              ml={-0.5}
              mt={-1}
            >
              Descubre nuestra carta y las mejores promociones. 
            </Heading>
          </Stack>
          <HStack mt="1" alignItems="center" justifyContent="space-between" flexDirection="row">
            <HStack>
              <Icon
                as={<MaterialIcons name="access-time" />}
                color="gray.500"
                size="xs"
              />
            <Heading size="xs" style={{fontWeight:"600"}}>
            6 min
            </Heading>
              <HStack
                space={{
                  base: 2,
                  md: 4,
                }}
                mx={{
                  base: "auto",
                  md: 0,
                }}
              >
                <Badge ml="2" colorScheme="success">DISPONIBLE</Badge>

              </HStack>
                
            </HStack>
          </HStack>

          <Center
            p={1}
            boxSize={10}
            position="absolute"
            right={0}
            m={2}
          >
            <Icon
                as={<MaterialIcons name="favorite" />}
                color="red.500"
                size="sm"
              />
          </Center>
        </Stack>
      </Box>
      
    )
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.BACKGROUNDCOLOR,
    },
    box:{
        width:"88%",
        justifyContent:"flex-start",
        alignSelf:"center",
        borderRadius:25,
        marginTop:10,
        backgroundColor:"gray"
    },
})

           // <View>
            //<TouchableRipple onPress={()=> navigation.navigate("")}>
               // <View style={styles.box}>
                
                //</View>
           // </TouchableRipple>
           // </View>
