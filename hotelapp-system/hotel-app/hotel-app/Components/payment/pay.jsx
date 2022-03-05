import React from 'react';
import { Paystack } from 'react-native-paystack-webview';
import { View } from 'react-native';
import BackendInfo from '../service/service'
import axios from 'axios';
import registerNNPushToken from 'native-notify';

const Pay = ({ navigation, route, uid }) => {
  const { hotelname, dateIn, dateOut, roomPrice, name, hotelImage, guests, rooms, Room, roomId, email } = route.params
  console.log(rooms, guests, hotelImage, hotelname, name)
  const guestId = `${uid}`
  const status = 'booked'
  const message = `You have successfully booked your hotel suite ${Room}.`
  registerNNPushToken(2214, 'NN6KNoOr2cYVZgro69Hq5Z')
  async function AddNotification() {
    const notify = {
      guestId,
      name,
      rooms,
      guests,
      roomPrice,
      hotelImage,
      hotelname,
      dateIn,
      dateOut,
      Room,
      email,
      message,
    };
    BackendInfo.addNotify(notify)
      .then((res) => {
        console.log('successfully saved notification', res.data)
      }).catch((e) => {
        console.log('error adding notification', e)
      })
  }
  async function BookRoom(e) {
    const newGuest = {
      guestId,
      name,
      rooms,
      guests,
      roomPrice,
      hotelImage,
      hotelname,
      Room,
      dateIn,
      dateOut,
      email,
    };
    console.log(newGuest)
    BackendInfo.createGuest(newGuest)
      .then(async (res) => {
        console.log(res.data)
        AddNotification()
        console.log('notiit', AddNotification)
        axios.post(`https://app.nativenotify.com/api/indie/notification`, {
          subID: `${res.data.guestId}`,
          appId: 2214,
          appToken: 'NN6KNoOr2cYVZgro69Hq5Z',
          title: `Congratulations ${name}`,
          message: `You have successfully booked your hotel suite ${Room} at hotel ${hotelname}. Your Booking Details Are As Follows:
                Type Room:${Room}
                CheckIn Date: ${dateIn}
                CheckOut Date:${dateOut}
                Room Price:${roomPrice}
            `
          , pushData: { screenName: 'Montello Hotel Booking App' }
        }).then((res) => {
          console.log('Sent a notification please check')
        })
          .catch((e) => {
            console.log('error sending', e)
            // Creating notification

          })
        navigation.navigate("message")
      }).catch((e) => {
        console.log(e)
      })
    console.log('email', email)

  }
  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_a32884e2cf099621f5eaa59f570898762882fa4b"
        amount={roomPrice}
        billingEmail={`${email}`}
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
