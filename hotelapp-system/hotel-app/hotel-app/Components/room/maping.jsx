import React from 'react';
import {View,Text,SafeAreaView,ScrollView} from 'react-native'
import {img} from '../gallery/reusables'
class HotelRooms {
    roomNumbers = [
        {id:'0',name:'Room A',price:'1898.00',description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',pic1:require('../../assets/roomA.png'),pic2:require('../../assets/roomABath.png'),navigate:'roomA',bath:'bathA',other:'other',pic3:(img.lobby),hotelpic:img.sand},
        {id:'1',name:'Room B',price:'1500.00',description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',pic1:require('../../assets/roomB.png'),pic2:require('../../assets/roomBBath.png'),navigate:'roomA',bath:'bathA',pic3:(img.bar),other:'other'},
        {id:'2',name:'Room C',price:'2100.00',description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',pic1:img.wine,pic2:require('../../assets/zinc.png'),pic3:img.red,navigate:'roomA',bath:'bathA',other:'other'}
    ]
    jhb = [
        {id:'0',name:'Room A',price:'2130.00',description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',pic1:img.redo,pic2:require('../../assets/roomABath.png'),navigate:'roomA',bath:'bathA',other:'other',pic3:(img.livingroom3),hotelpic:img.hotel2},
        {id:'1',name:'Room B',price:'1500.00',description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',pic1:img.singles,pic2:require('../../assets/roomBBath.png'),navigate:'roomA',bath:'bathA',pic3:(img.livingroom1),other:'other'},
        {id:'2',name:'Room C',price:'2100.00',description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',pic1:img.bed4,pic2:img.livingroom2,pic3:img.red,navigate:'roomA',bath:'bathA',other:'other'}
    ]
    facility = [
        {id:'0',name:'bath',type:'font-awesome-5',tyName:'Personal Bathroom'},
        {id:'1',name:'snowflake',type:'font-awesome-5',tyName:'AC'},
        {id:'3',name:'wifi',type:'font-awesome-5',tyName:'Free Wifi'},
     
    ]
    pretoria = [
        {id:'0',name:'Room A',price:'1898.00',description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',pic1:(img.bed5),pic2:img.livingroom4,navigate:'roomA',bath:'bathA',other:'other',pic3:(img.lobby),hotelpic:img.hotel5},
        {id:'1',name:'Room B',price:'1500.00',description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',pic1:require('../../assets/roomB.png'),pic2:img.purple,navigate:'roomA',bath:'bathA',pic3:(img.bar),other:'other'},
        {id:'2',name:'Room C',price:'2100.00',description:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam mattis mi eu tellus ut lobortis aliquam. Non,',pic1:img.bed3,pic2:require('../../assets/zinc.png'),pic3:img.red,navigate:'roomA',bath:'bathA',other:'other'}
    ]

    
}
export default new HotelRooms()