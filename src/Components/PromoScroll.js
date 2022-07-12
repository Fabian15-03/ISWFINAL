import React from 'react';
import { StyleSheet, ScrollView , TouchableOpacity} from 'react-native';
import colors from '../Utils/colors';
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
    Button,
    Actionsheet,
    useDisclose,
  } from "native-base"
  import { MaterialIcons, Ionicons , MaterialCommunityIcons } from "@expo/vector-icons"

  export default function Foodlist() {
    const { isOpen, onOpen, onClose } = useDisclose()
    return (
      <>
        <Button 
        bgColor={colors.ORANGE}
        width={"30%"}
        borderRadius={10}
        padding={2}
        
        startIcon={<Icon as={MaterialCommunityIcons} name="heart" color={"red"} size={4} />}
        onPress={onOpen}><Text fontWeight="600" color={colors.WHITE}>Tus Gustos</Text></Button>
  
        <Actionsheet isOpen={isOpen} onClose={onClose} rounded={5}>
          <Actionsheet.Content bgColor={colors.BACKGROUNDCOLOR}>
          <Text bold fontSize={"lg"} color={colors.ORANGE}>Qué se te antoja comer hoy?</Text>
            <PromoScroll/>
          </Actionsheet.Content>
        </Actionsheet>

      </>
    )
  }

  export function PromoScroll() {
    return (
        <ScrollView >
          
            <HStack justifyContent="space-around"  p={2}>
                <Box
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"       
                       
                >   
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/pngegg.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
              </AspectRatio>    
              <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}>Hamburguesas</Text>      
                </Box>

              <Box
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/pizzaz.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
                </AspectRatio> 
                <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}>Pizzas</Text>
              </Box>

              <Box
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"  
                  
                >
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/pollo-brasa.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
                </AspectRatio> 
                <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}>Pollo a la brasa</Text>
              </Box>

              </HStack>

             
              <HStack justifyContent="space-around"  p={2} >
                <Box
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >   
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/pastas.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
              </AspectRatio>    
              <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}>Pastas</Text>      
                </Box>

              <Box
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/ceviche.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
                </AspectRatio> 
                <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}>Pescados</Text>
              </Box>

              <Box
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/makis.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
                </AspectRatio> 
                <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}> Makis </Text>
              </Box>
              </HStack>

              <HStack justifyContent="space-around" p={2} >
                <Box
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >   
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/criollo.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
              </AspectRatio>    
              <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}>Criollos</Text>      
                </Box>

              <Box
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/parrilla.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
                </AspectRatio> 
                <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}>Parrillas</Text>
              </Box>

              <Box
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/chifa.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
                </AspectRatio> 
                <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}>Chifas</Text>
              </Box>
              </HStack>

              <HStack justifyContent="space-around" p={2} >
                <Box
                  mt={1}
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >   
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/saludable.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
              </AspectRatio>    
              <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}>Saludable</Text>      
                </Box>

              <Box
                  mt={1}
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/sushi.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
                </AspectRatio> 
                <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}>Sushi</Text>
              </Box>

              <Box
                mt={1}
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/desayunos.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
                </AspectRatio> 
                <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}> Desayunos </Text>
              </Box>

              </HStack>

              <HStack justifyContent="space-around" p={2} >
                <Box
                mt={1}
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >   
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/postres.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
              </AspectRatio>    
              <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}> Postres </Text>      
                </Box>

                <Box
                mt={1}
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/helado.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
                </AspectRatio> 
                <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}>Helados</Text>
              </Box>

              <Box
                  mt={1}
                  width={"30%"}
                  bg={colors.BACKGROUNDCOLOR}
                  rounded="xl"             
                >
                <AspectRatio>
                <Image
                  roundedTop="lg"
                  source={require("../../assets/batidos.png")}
                  width={"100%"}
                  height={"100%"}
                  resizeMode={"contain"}
                  alt="image"
                />
                </AspectRatio> 
                <Text bold alignSelf="center" fontSize="xs" color={colors.WHITE}>Bebidas</Text>
              </Box>
              </HStack>

              
            </ScrollView>
    )
}

const styles = StyleSheet.create({})
