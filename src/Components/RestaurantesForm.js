import React from 'react'
import { StyleSheet, View , ScrollView, FlatList , useWindowDimensions } from 'react-native'
import colors from "../Utils/colors"
import {TouchableRipple , Text} from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Box,
    Heading,
    Icon,
    AspectRatio,
    Center,
    HStack,
    VStack,
    Stack,
    NativeBaseProvider,
    Avatar,
    Spacer,
    Image,
  } from "native-base"
  import { MaterialIcons, Ionicons } from "@expo/vector-icons"

  import ListRestaurantes from './ListRestaurantes';
  import Restaurantes from '../Components/Restaurantes';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function RestaurantesForm() {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();

    return (
      <>
        <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate("reservar")}>
        <Center>
          <Box_Prueba/>
        </Center>
        </TouchableOpacity>
        <FlatList
        data={ListRestaurantes}
        renderItem={({item}) => <Restaurantes item={item} /> }
        
        />
        </ScrollView>
      </>
        
    )
}

export const Box_Prueba = () => {


    return (
      
      <Box
        width={"90%"}
        shadow={1}
        borderRadius={20}
        backgroundColor={ "gray.50"}
        
      >
        <Box>
          <AspectRatio ratio={10/1}>
            <Image
              roundedTop="lg"
              source={require("../../assets/logos/chilis.png")}
              width={"100%"}
              height={"100%"}
              resizeMode={"cover"}
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
                source={require("../../assets/logos/chillis-logo.png")}
                />
          </Center>
        </Box>
        
        <Stack p={2.5} space={1}>
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
          <HStack alignItems="center" space={4} justifyContent="space-between" flexDirection="row">
            <HStack alignItems="center">
              <Icon
                as={<MaterialIcons name="access-time" />}
                color="gray.500"
                size="xs"
              />
            <Text style={{fontWeight:"600"}}>
            6 min
            </Text>
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

    box:{
        width:"88%",
        justifyContent:"flex-start",
        alignSelf:"center",
        borderRadius:25,
        marginTop:10,
        backgroundColor:"gray"
    },
})


const Example = () => {
  return <Box>
      <Heading fontSize="xl" p="4" pb="3">
        Restaurantes
      </Heading>
      <FlatList data={data} renderItem={({
      item
    }) => 
    <Box borderBottomWidth="1" borderColor="coolGray.200" pl="4" pr="5" py="2">
            <HStack space={3} justifyContent="space-between">
              <Avatar size="48px" source={{
              uri: item.image
        }} />
              <VStack>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>} keyExtractor={item => item.id} />
    </Box>;
};