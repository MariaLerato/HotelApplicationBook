import React,{useEffect,useState} from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Icon,ListItem ,Avatar} from "react-native-elements";
import BackendInfo from '../../service/service'


const PretoriaHotels = ({ navigation, route }) => {
  const [hotels, setHotels] = useState([]);
  const {roomNo, dateIn, dateOut,guestNo,location,days,city} = route.params;
  const [isLoaded,setIsLoaded] = useState(false)

  const retrieveData = () => {
    BackendInfo.getAll()
      .then((res) => {
        console.log('location',res.data);
        setIsLoaded(true);
        setHotels(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveData();

  }, []);
  console.log('days',days)


  let searchString = city;
  const searchData = hotels.filter((data) =>
    data.city.includes(searchString)
  );
  return (
    <>
      <View style={{flex:1, backgroundColor:'white',}}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "10%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{marginLeft:'3%'}} onPress={() => navigation.goBack()}>
            <Icon name={"arrow-back"} size={25} color={"#1C5248"} />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, paddingLeft: "8%", color: "#1C5248" }}>
            {city} Hotels
          </Text>
        </View>
        <ScrollView>
          {
            !isLoaded?(
              <Text style={{padding:'2%'}}>Please Wait While We Load Your Hotels</Text>
            ):(
              <>{
                searchData.map(data=>
                  <View key={data._id}>
                 <ListItem key={data._id} >
                      <Avatar size={'xlarge'} source={{ uri: data.image.image }}  onPress={() =>
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
                     
                        })}></Avatar>
                   
                   <ListItem.Content  >
                      <ListItem.Title style={{ color: "#1C5248",fontSize:20}}>{data.name}</ListItem.Title>
                      <ListItem.Subtitle style={{fontSize:10}}>{data.text}</ListItem.Subtitle>
                      <ListItem.Subtitle style={{color:'#FAA455'}}>Hotel Reviews</ListItem.Subtitle>
                    </ListItem.Content>
                  
                
                  </ListItem>
              </View>
                  
                  )
              }
              </>
              
            )
          }
        
         
         
        </ScrollView>
      </View>
    </>
  );
};
export default PretoriaHotels;
