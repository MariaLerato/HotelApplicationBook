import React,{useState,useEffect} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native'
import { Icon, Avatar ,ListItem} from 'react-native-elements';
import BackendInfo from './service/service'
import moment from 'moment';
import firebase from './firebase/firebase';

const Notification = ({ navigation }) => {
  const [date,setDate] = useState(0)  
    const [NotifyGuest,setNotifyGuest] = useState([])
    const [getTime,setTime] = useState()
    const userId = firebase.app.auth().currentUser.uid
    const getNotification = ()=>{
        BackendInfo.getNotification()
        .then((res)=>{
            console.log(res.data.NotifyGuest)
            setNotifyGuest(res.data.NotifyGuest)
        })
        .catch((e)=>{
            console.log('guest',e)
        })
    }

    useEffect(()=>{
        getNotification()
    },[])

    return (
       <View style={Styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#61B0A2',height:75,padding:'3%',marginLeft:'-2%',marginRight:'-2%'}}>
             <Text style={{color:'white',marginTop:'4%',fontSize:28,fontWeight:'600',paddingLeft:'4%'}}>Notifications</Text>
              <TouchableOpacity style={{marginTop:'6%',color:'white',fontWeight:'700',paddingRight:'2%',fontSize:16}}>
                  <Icon name='search' color={'white'}/>
              </TouchableOpacity>
          </View> 
         <ScrollView>
        {
            NotifyGuest.map((data)=>
            <>
            {userId === data.guestId?(<>
             <ListItem >
                        <Avatar rounded size={'medium'} source={{uri:data.hotelImage}} />
                        <ListItem.Content>
                            <ListItem.Title>{data.hotelname}</ListItem.Title>
                            <ListItem.Subtitle style={{height:20}}>{data.message}</ListItem.Subtitle>
                        </ListItem.Content>
                        <Text>{moment(data.date).fromNow()}</Text>
                    </ListItem>
            </>):(null)}
              
            </>
                 
            )
        }
        </ScrollView>
       </View>
    )
}
const Styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: '4%',
    },
    container:{
        flex:1,
        paddingHorizontal:'1%',
        paddingVertical:'6%',
        backgroundColor:'white'
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '-10%',
        paddingTop: '14%',
        padding: '2%',
        borderBottomLeftRadius: 5,
        borderBottomEndRadius: 5
    },

    textHead: {
        color: '#1C5248',
        fontSize: 30,
        paddingLeft: '8%',
        fontWeight: '600',
        marginTop: '-2%'
    },
    notify: {
        display: 'flex',
        flexDirection: 'row',
        margin:'2%'
    },
    hotelname: {
        color: '#1C5248',
        fontSize: 20,
        fontWeight: '700',
        paddingLeft:'2%'
    }
})
export default Notification