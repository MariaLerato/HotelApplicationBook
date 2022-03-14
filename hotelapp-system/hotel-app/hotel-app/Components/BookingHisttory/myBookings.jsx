import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import ClipLoader from 'react-spinners/ClipLoader'
import { Icon, Input, Avatar, ListItem } from "react-native-elements";
// import { img } from "../gallery/reusables";
import BackendInfo from "../service/service";
import firebase from "../firebase/firebase";

const MyBookings = ({ navigation }) => {
 const userId = firebase.app.auth().currentUser.uid
  const [hotelGuest, setGuest] = useState([]);
  const [client, setClient] = useState([]);
  const [isLoadig,setLoading] = useState(false)

  const retrieveGuest = (e) => {
    BackendInfo.getAllGuests().then((res) => {
      console.log('guest',res.data.hotelGuest);
      setLoading(true)
      setGuest(res.data.hotelGuest);
      console.log('log---------------------------')
    }).catch((e)=>{
      console.log('error',e);
    })
  };
  console.log('ttttttttttt')

  const getClient = () => {
    BackendInfo.getClient()
      .then((res) => {
        console.log(res.data);

        setClient(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveGuest();
  }, []);

  const ShowBookings = () => {
    return (
      <>
      {!isLoadig?(<>
        <Text>Please Wait While We Sync Your Bookings</Text>
        </>
      ):(
        <>
           {hotelGuest.map((data) => 
           <>
           {userId === data.guestId?(<>
            <ListItem key={data._id} >
            <Avatar size={'medium'} rounded source={{ uri: data.hotelImage }}></Avatar>
         <ListItem.Content>
            <ListItem.Title style={{ color: "#1C5248",fontSize:20}}>{data.hotelname}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron
            onPress={()=>
              navigation.navigate("historyDetails", {
                hotelname: data.hotelname,
                dateIn: data.dateIn,
                dateOut: data.dateOut,
                roomNo: data.rooms,
                Totalprice: data.roomPrice,
                name: data.name,
                image: data.hotelImage,
                guestId:data.guestId,
                Id:data._id
              })
            }
          />
        </ListItem>
           </>):(null)}
       
          </>
            )}
            
        </>
      )} 
     
      </>
    );
  };
  return (
    <View  style={styles.container}>
      <ScrollView>
        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
               <Text
            style={{
              fontSize: 28,
              color: "#1C5248",
              paddingLeft: "2%",
              marginTop: "3%",
              fontWeight:'700'
            }}   
          >
            My Bookings
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SearchBookings')} style={{marginTop: "5%",paddingRight:'2%'}}>
             <Icon name='search' type='font-awesome' color={"#1C5248"} size={25} />
          </TouchableOpacity>
        </View>
       
            

         <ShowBookings />
      
     
    </ScrollView>
     
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        // justifyContent:'flex-start',
        paddingVertical:'8%',
        paddingHorizontal:'2%'
    },
  textContainer: {
    backgroundColor: "white",
    width: "90%",
    height: 65,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "auto",
    padding: "4%",
    borderRadius: 20,
    marginBottom: "4%",
  },

});
export default MyBookings;
