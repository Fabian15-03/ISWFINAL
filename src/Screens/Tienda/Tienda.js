import React , { Component } from 'react'
import { StatusBar, FlatList , useWindowDimensions } from 'react-native'
import { StyleSheet, View } from 'react-native'
import colors from "../../Utils/colors"
import { SafeAreaView } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import SearchBar from "react-native-dynamic-search-bar";
import { Divider , Icon } from 'react-native-elements';
import RestaurantesForm from '../../Components/RestaurantesForm';
import filter from "lodash.filter";

import PromoScroll from "../../Components/PromoScroll"

import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Center,
    HStack,
    Text,
    NativeBaseProvider,
    IconButton,
    Button,
    Actionsheet,
    useDisclose,
    Stack,
  } from "native-base"
  import { MaterialIcons, Ionicons , MaterialCommunityIcons } from "@expo/vector-icons"
import ListRestaurantes from '../../Components/ListRestaurantes';
import { List } from 'react-native-paper';



export default function Tienda() {
    
    const navigation = useNavigation();

    return (
        <NativeBaseProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <View>
            <View style={{width:'90%' , flexDirection:'row'}}>
            <View>
            <Text style={styles.text1}>Encuentra tu</Text>
            <Text style={styles.text2}>Resturante Favorito</Text>
            </View>
            <View style={{ paddingTop:10 ,width:'40%' , flexDirection:'row' , justifyContent:"center" , alignItems:"center"}}>
            </View>
            </View>
            <Search/>
            <View style={{flexDirection:"row" , justifyContent:"space-around" , alignItems:"center" , paddingHorizontal:10 , marginTop:10}}>
            
            <PromoScroll/>
        <Button 
            bgColor={colors.ORANGE}
            width={"30%"}
            borderRadius={10}
            p={2}
            startIcon={<Icon as={MaterialCommunityIcons} name="map" color={"green"}/>}
            onPress>
        <Text fontWeight="600" color={colors.WHITE}>Cerca a tí</Text></Button>
        <Button 
            bgColor={colors.ORANGE}
            width={"30%"}
            borderRadius={10}
            p={2}
            startIcon={<Icon as={MaterialCommunityIcons} name="star" color={"yellow"}/>}
            onPress>
        <Text fontWeight="600" color={colors.WHITE}>Valoración</Text></Button>
        </View>
            </View>
            <Divider style={{backgroundColor:colors.ORANGE, height: 2 , width: "90%" , marginTop:10 , alignSelf:"center"}}/>
            <RestaurantesForm/>
                
                  
        </SafeAreaView>
        </NativeBaseProvider>
        
    )
};

const renderItem = ({ item }) => <ListRestaurantes title={item.title} />;
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      searchValue: "",
    };
    this.arrayholder = [] ;
  }
  
  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };
  
  render() {
    return (
      <View style={styles.search}>
        <SearchBar
          lightTheme
          round
          placeholder="Buscar"
          fontWeight={'500'}  
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      </View>
        );
    }
}



const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: colors.BACKGROUNDCOLOR,
        },
        text1:{
            paddingTop:10,
            fontSize:24,
            color: colors.WHITE,
            fontWeight:"700",
            paddingHorizontal:35,
        },
        text2:{
            fontSize:28,
            paddingTop:7,
            color: colors.ORANGE,
            fontWeight:"700",
            paddingHorizontal:35,
        },
        search:{
            height:32,
            marginTop:"2%",
            backgroundColor:"#bdc3c7"
        },
        btnmenu:{
            color:colors.ORANGE
        }
})
