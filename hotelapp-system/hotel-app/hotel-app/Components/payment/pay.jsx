import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import { View } from 'react-native';
import BackendInfo from '../service/service'
import axios from 'axios';

const  Pay=({navigation,route})=> {
    const {hotelname,dateIn,dateOut,roomPrice,name,hotelImage,guests,rooms,Room,roomId,email} = route.params
    console.log(rooms,guests,hotelImage,hotelname)
    const guestId = `1256${name}`
    async function BookRoom(e){
      
        const newGuest = {
            name,
            guests,
            rooms,
            Room,
            roomPrice,
            guestId,
            dateIn,
            dateOut,
            hotelImage,
            hotelname
          };
        console.log(newGuest)
        BackendInfo.createGuest(newGuest)
        .then((res)=>{
            console.log(res.data)
            axios.post(`https://app.nativenotify.com/api/indie/notification`, {
              subID: `${res.data.guestId}`,
              appId: 2214,
              appToken: 'NN6KNoOr2cYVZgro69Hq5Z',
              title: `Congratulations ${name}`,
              message: `You have successfully booked your hotel suite ${Room} at hotel ${hotelname}
              Your Booking Details Are As Follows:
                Type Room:${Room}
                CheckIn Date: ${dateIn}
                CheckOut Date:${dateOut}
                Room Price:${roomPrice}
              Thank You For Using Our App.  `
              ,pushData:{screenName:'Montello Hotel Booking App'}
            }).catch((e)=>{
           console.log('error sending',e)
         
          })
        navigation.navigate("historyDetails",{hotelname:hotelname,dateIn:dateIn,dateOut:dateOut,roomNo:rooms,Totalprice:roomPrice,name:name,image:hotelImage})
        }).catch((e)=>{
            console.log(e)
        })
        
    }
    return (
    <View style={{ flex: 1 }}>
      <Paystack  
        paystackKey="pk_test_a32884e2cf099621f5eaa59f570898762882fa4b"
        amount={roomPrice}
        billingEmail={email}
        billingName={name}
        billingMobile="0793879978"
        activityIndicatorColor="green"
        onCancel={(e) => {
            alert('Unable To Complete Payment')
            navigation.goBack()
        }}
        onSuccess={BookRoom}
        autoStart={true}
        currency="ZAR"
      />
    </View>
  );
}
export default Pay;
