import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon ,ListItem} from "react-native-elements";
import BackendInfo from "../service/service";

const hotelroom = ({ navigation, route }) => {
  const {
    roomNo,
    main,
    name,
    longitude,
    latitude,
    dateIn,
    dateOut,
    guestNo,
    location,
    email,
    days,
    id
  } = route.params;
  const [hotelrooms, setHotelRoom] = useState([]);
  const [isLoaded,setIsLoaded] = useState(false)

  const retrieveData = () => {
    BackendInfo.getRooms()
      .then((res) => {
        console.log(res.data);
        setIsLoaded(true)
        setHotelRoom(res.data.hotelrooms);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveData();
  }, []);
  console.log(email)
  const SearchRooms = hotelrooms.filter((data)=>
  data.email === email
  )

const ViewRooms = ()=>{
  return(
    <>
    {SearchRooms.map((data) => (
          <>
              {data.status !=='Not Available'?(
         <ListItem key={data._id} >
           {/* <TouchableOpacity onPress={() =>
                navigation.navigate("hotelrooms", {
                  roomNo:roomNo,
                   main:data.image.image,
                   name:data.name,
                   dateIn:dateIn,
                   dateOut:dateOut,
                   guestNo:guestNo,
                   location:location,
                   email:data.email,
                   days:days,
                   id:data.hotel_id
             
                })}> */}

<Image  source={{ uri: data.bedImage.bedImage }} style={{ borderRadius: 10,width:150,height:150}}  ></Image>
           {/* </TouchableOpacity> */}
           <ListItem.Content>
              <ListItem.Title style={{ color: "#1C5248",fontSize:20}}>{data.roomName}</ListItem.Title>
              <ListItem.Subtitle style={{fontSize:10}}>{data.roomDes}</ListItem.Subtitle>
              <ListItem.Subtitle style={{color:'#FAA455'}}><View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("detail", {
                    hotelname: data.name,
                    price: data.roomPrice,
                    roomId:data._id,
                    des:data.roomDes,
                    roomNo: roomNo,
                    main: main,
                    name: name,
                    dateIn: dateIn,
                    dateOut: dateOut,
                    roomName: data.roomName,
                    longitude: longitude,
                    latitude: latitude,
                    guestNo: guestNo,
                    location: location,
                    days:days,
                    id:id
                  })
                }
              >
                <Text style={Styles.RoomHead}>Book Now</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate("roomA",{roomId:data._id})}>
                <Text>Preview Room</Text>
              </TouchableOpacity>
                </View></ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ):null}
      </>
    ))}
    
    </>
  )
}

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.header}>
        <Icon
          name={"arrow-back"}
          color={"#1C5248"}
          style={{ fontWeight: "700", marginTop: "17%" }}
          onPress={() => navigation.goBack()}
        />
        <Text style={Styles.textHead}>Our Rooms</Text>
      </View>
      <View>
        {!isLoaded?(
        <Text>Please Wait While We Sync Your Rooms</Text> 
        ):(
        <> 
        <ViewRooms/>
        </>
        )}
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    paddingHorizontal: "2%",
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: "2%",
  },
  textHead: {
    color: "#1C5248",
    fontSize: 24,
    paddingLeft: "5%",
    fontWeight: "700",
  },
  subHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  RoomHead: {
    color: "#1C5248",
    fontSize: 20,
    paddingVertical: "2%",
    paddingHorizontal: "2%",
     textDecorationStyle:'solid',
     borderWidth:1 ,
     borderRadius:5,
     borderColor:"#1C5248",
    top:2,
     textDecorationColor:"#06AC8E"
  },
  price: {
    color: "#06AC8E",
    fontSize: 17,
    margin: "1%",
  },
  subtext: {
    color: "#B2B2B2",
    fontSize: 15,
    paddingVertical: "2%",
    paddingHorizontal: "1.5%",
  },
  facilities: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    paddingHorizontal: "2%",
  },
  text: {
    width: "60%",
    marginLeft: "17%",
    textAlign: "center",
    color: "#8BA9A3",
  },
  touchable: {
    paddingHorizontal: "1%",
  },
});

export default hotelroom;
