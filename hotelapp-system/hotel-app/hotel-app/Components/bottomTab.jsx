import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Home from './home'
import {Icon} from 'react-native-elements'
import Search from './Search'

import Profile from './profile'
import MyBookings from './BookingHisttory/myBookings'

const TabNavigator=()=>{
    const Tab = createMaterialBottomTabNavigator()
    return(
        <Tab.Navigator  
            barStyle={{backgroundColor:'white'}} activeColor='#1C5248' inactiveColor={'#d9d9d9'}
      labeled={false}
        >
            <Tab.Screen name="home" component={Home} 
            options={{ tabBarIcon:({color,size})=>(
                <Icon name={'home'} type="font-awesome"   color={color} />
                
            ), }}
            
            />
               <Tab.Screen name="Search" component={Search} 
            options={{ tabBarIcon:({color,size})=>(
                <Icon name={'search'} type="font-awesome" color={color}  />
            ),}}
            />
               <Tab.Screen name="myBookings" component={MyBookings} 
            options={{ tabBarIcon:({color,size})=>(
                <Icon name={'bookmark'} type="font-awesome" color={color}  />
            ),}}
            />
                <Tab.Screen name="profile" component={Profile} 
            options={{ tabBarIcon:({color,size})=>(
                <Icon name={'user'} type="font-awesome" color={color}  />
            ),}}
            />
        </Tab.Navigator>
    )
}
export default TabNavigator
