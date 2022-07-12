import React from 'react'
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View , useWindowDimensions } from 'react-native'
import Emoji from 'react-native-emoji';
import colors from "../Utils/colors";
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
import { TouchableRipple } from 'react-native-paper';

export default Restaurantes = ({item}) => {

    const {width} = useWindowDimensions();

    return (
        <SafeAreaView style={[{width}]}>
        <NativeBaseProvider>
        <Center flex={1}>
        <Box
        marginBottom={3}
        marginTop={3}
        width={"90%"}
        shadow={1}
        borderRadius={20}
        backgroundColor={ "gray.50"}
      >
        <Box>
          <AspectRatio ratio={10/1}>
            <Image
              roundedTop="lg"
              source={item.image}
              width={"100%"}
              height={"100%"}
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
                source={item.logo}
                />
          </Center>
        </Box>
        
        <Stack p={2.5} space={1}>
          <Stack space={1}>
            <Heading size="md" ml={-1}>
              {item.title}
            </Heading>
            <Heading
              size="xs"
              color={"grey"}
              fontWeight="400"
              ml={-0.5}
              mt={-1}
            >
              {item.description}
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
            {item.direccion}
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
      </Center>
      </NativeBaseProvider>
        </SafeAreaView>
    )
}

