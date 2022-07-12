import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";


import ProfileScreen from "../Screens/Profile/ProfileScreen";
import ProfileSettings from "../Screens/Profile/ProfileSettings";

import Yourlikes from "../Screens/Profile/ProfileComponents/Yourlikes"
import Payment from "../Screens/Profile/ProfileComponents/Payment"
import Verification from "../Screens/Profile/ProfileComponents/Verification"
import Membership from "../Screens/Profile/ProfileComponents/Membership"
import Language from "../Screens/Profile/ProfileComponents/Language"
import Notifications from "../Screens/Profile/ProfileComponents/Notifications"
import TermsandConditions from "../Screens/Profile/ProfileComponents/TermsandConditions"
import ReclamationsBook from "../Screens/Profile/ProfileComponents/ReclamationBook"
import Developer from "../Screens/Profile/ProfileComponents/Developer"

const Stack = createStackNavigator();

export default function ProfileStack()
{
    return(
        <Stack.Navigator>

            <Stack.Screen component={ProfileScreen} name="profile" options={{headerShown:false}}/>
            <Stack.Screen component={ProfileSettings} name="profile-settings" options={{headerShown:false}}/>


            <Stack.Screen component={Yourlikes} name="yourlikes" options={{headerShown:false}} />
            <Stack.Screen component={Payment} name="payment" options={{headerShown:false}}/>
            <Stack.Screen component={Verification} name="verification" options={{headerShown:false}}/>
            <Stack.Screen component={Membership} name="membership" options={{headerShown:false}}/>
            <Stack.Screen component={Language} name="language" options={{headerShown:false}}/>
            <Stack.Screen component={Notifications} name="notifications" options={{headerShown:false}}/>
            <Stack.Screen component={TermsandConditions} name="termsandconditions" options={{headerShown:false}}/>
            <Stack.Screen component={ReclamationsBook} name="reclamationsbook" options={{headerShown:false}}/>
            <Stack.Screen component={Developer} name="developer" options={{headerShown:false}}/>
        </Stack.Navigator>

    )
}
