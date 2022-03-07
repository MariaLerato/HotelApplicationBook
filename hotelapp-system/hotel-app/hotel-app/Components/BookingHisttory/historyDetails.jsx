import React from 'react';
import { useState } from 'react';
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,Image} from 'react-native'
import { Avatar,Icon } from 'react-native-elements';
import BackendInfo from '../service/service'

const DetailsHistory = ({navigation,route}) =>{
    const {name,Totalprice,dateIn,dateOut,roomNo,image,hotelname,guestId,Id} = route.params
 const [hotelGuests,setHotelGuests] = useState([])
//  const [isLoading,setLoading] = useState(true)
    const [status,setStatus] = useState('Booked')
    console.log('try deleting',Id);
    const Delete = (itemId)=>{
        BackendInfo.deleteBooking(Id)
        .then(res=>{
            setHotelGuests(res.data.hotelGuests)
            console.log('delered check out');
            navigation.goBack()
            console.log(guestId ,' deleted',response.data)
        }).catch((e)=>{
            console.log('error deleting',e)
        })
    }
    return(
        <>
        <View style={{flex:1,padding:'8%'}}>
            <View style={{justifyContent:'space-between',width:'100%',flexDirection:'row',paddingHorizontal:'-4%',paddingVertical:'2%'}}>
            <TouchableOpacity  >
                <Icon name={'arrow-back'} color={'#C4C4C4'} onPress={() =>navigation.goBack()} />
            </TouchableOpacity>
            <TouchableOpacity >
                <Icon name={'times'} type={'font-awesome-5'} color={'#C4C4C4'} onPress={() =>navigation.navigate('message')} />
            </TouchableOpacity>
            </View>
           <View style={{alignItems:'center',marginTop:'10%',justifyContent:'center'}}>
               <Avatar size={'medium'} style={{borderColor:'white',borderWidth:0.5,width:200,height:200}} source={{uri:image}}/>
               <Text style={{color:'#4C9285',fontSize:30,padding:'2%'}}>{hotelname}</Text>
           </View>
           <View style={{display:'flex',flexDirection:'row',marginTop:'8%',alignItems:'center',justifyContent:'center'}}>
               <View style={{padding:'2%'}}>
                    <Text style={{fontSize:20}}>Guest</Text>
                    <Text style={{fontSize:20}}>No. of Rooms</Text>
                    <Text style={{fontSize:20}}>Check In</Text>
                    <Text style={{fontSize:20}}>Check Out</Text>
                    <Text style={{fontSize:20}}>Total</Text>
                    <Text style={{fontSize:20}}>Status</Text>
               </View>
               <View style={{padding:'2%',marginLeft:'2%'}}>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>{name}</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>{roomNo}</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>{dateIn}</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>{dateOut}</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>R {Totalprice}</Text>
               <Text style={{fontSize:19,color:'#C4C4C4'}}>{status}</Text>
               </View>
           </View>
           <View>
               
           <TouchableOpacity style={{width:'90%',height:65,borderColor:'#61B0A2',borderWidth:4,borderRadius:10,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:'10%'}} onPress={Delete}>
               <Text style={styles.touchableText}>Delete Booking</Text>
            </TouchableOpacity>
           </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: 'red',
        height: 60,
        marginTop: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        width: '100%',
        borderColor: 'rgba(0,0,0,.2)',
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8
    },
    touchableText: {
        fontSize: 22,
        color: '#61B0A2',
        fontWeight: '700'


    },
})
export default DetailsHistory