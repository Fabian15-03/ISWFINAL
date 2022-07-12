import React , {useState , useEffect} from 'react';
import Loading from "../Components/Loading";
import AuthRoute from "./AuthRoute";
import AccountStack from "./AccountStack";
import {validarphone, validarsesion , cerrarsesion} from "../Utils/Actions";

export default function SwitchNavigator(){

    const [phoneauth,setphoneauth] = useState(false);
    const [loading , setloading]   = useState(true);

    

    useEffect(() => {
        validarphone(setphoneauth);
        setTimeout(()=>{
        setloading(false);
        }, 5000)
    },[] )

    if (loading) {

        return <Loading isVisible = {loading}/>;
    }
    else {
        return phoneauth ? <AuthRoute/> : <AccountStack/>;
    }

}
