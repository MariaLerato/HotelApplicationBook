import React,{useState,useEffect} from 'react'
import { ScrollView ,StyleSheet,Text,View} from 'react-native'
import { ListItem ,Avatar,Input, Icon} from 'react-native-elements'
import BackendInfo from '../service/service'

const SearchBookings = () => {
    const [hotelGuest,setGuest] = useState([])
    const [searchItem,setItem] = useState('')

    const retrieveGuest = (e) => {
        BackendInfo.getAllGuests().then((res) => {
          console.log(res.data);
          setGuest(res.data.hotelGuest);
        });
    };
    useEffect(()=>{
        retrieveGuest();
    },[])
   
    const SearchBook = (item)=>{
        if(item !== ''){
            const results = hotelGuest.filter((data)=>{
                console.log(item)
                return data.hotelname.toLowerCase().startsWith(item.toString().toLowerCase())
            });
            setGuest(results)
        }else{
            setGuest(hotelGuest)
        }
        setItem(item)
    }
  return (
    <ScrollView  style={styles.container}>
           <View >
               <Input
               leftIcon={<Icon name='search' type='font-awesome' color={"#1C5248"} size={20} />}
                value={searchItem}
               onChangeText={SearchBook}
               style={{padding:'2%'}}
               placeholder={'Search Booking History'}
               />
               { 
              hotelGuest && hotelGuest.length > 0?( 
                hotelGuest.map(data=>
                    <>
                        
                  <ListItem key={data._id} >
                      <Avatar size={'medium'} source={{ uri: data.hotelImage }}></Avatar>
                   <ListItem.Content>
                   
                      <ListItem.Title style={{ color: "#1C5248",fontSize:20}}>{data.hotelname}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron
                      onPress={() =>
                        navigation.navigate("historyDetails", {
                          hotelname: data.hotelname,
                          dateIn: data.dateIn,
                          dateOut: data.dateOut,
                          roomNo: data.rooms,
                          Totalprice: data.roomPrice,
                          name: data.name,
                          image: data.hotelImage,
                        })
                      }
                    />
                  </ListItem>
                    </>
               )
          
               ): (
                     <Text>No results Found!</Text>
             )    
            }
    
 
    </View>

    </ScrollView>
);
}
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


})

export default SearchBookings