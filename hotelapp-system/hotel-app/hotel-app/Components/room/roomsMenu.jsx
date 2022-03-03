import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import hotelroom from './hotelrooms';
import Detail from './detail';

const roomMenu = ()=>{
    const Stack = createNativeStackNavigator()
    return(
        <>
         <Stack.Navigator initialRouteName='hotelrooms' screenOptions={{headerShown:false}}>
             <Stack.Screen name='detail' component={Detail}/>
             <Stack.Screen name='hotelrooms' component={hotelroom}/>
        </Stack.Navigator>   
        </>
    )
}
export default roomMenu