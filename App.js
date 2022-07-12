
import React , {useState , useEffect} from 'react';
import { StyleSheet, Text, View , LogBox } from 'react-native';
import Loading from "./src/Components/Loading";
import NoAuthRoute from "./src/Navigation/NoAuthRoutes";
import SwitchNavigator from "./src/Navigation/SwitchNavigator";
import {validarsesion , cerrarsesion} from "./src/Utils/Actions";
import {encode , decode } from "base-64";
import AuthRoute from './src/Navigation/AuthRoute';



if (!global.btoa){
  global.btoa = encode;
}

if (!global.atob){
  global.atob = decode;
}

LogBox.ignoreLogs([
  "Animated",
  "Setting a timer",
  "Avatar.onAccessoryPress",
  "Avatar.showAccessory",
]);

export default function App() {
  const [user , setuser] = useState(false);
  const [loading , setloading ] = useState(false);

  useEffect(()=>{
    setloading(true);
    validarsesion(setuser);
    setloading(false);
  },[]);  
  if (loading){

    return  <Loading isVisible={loading}/>
  }

  return user ? <SwitchNavigator/> : <NoAuthRoute/>;
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

