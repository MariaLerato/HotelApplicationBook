import React,{useState,useEffect} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native'
import { Icon, Avatar } from 'react-native-elements';
import BackendInfo from './service/service'

const Notification = ({ navigation }) => {
    const [NotifyGuest,setNotifyGuest] = useState([])
    const [getTime,setTime] = useState()
    
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
    const TimeRemining = (birthday)=>{
        var bday = new Date(birthday);
        let today = new Date();
        var distance =bday.getTime() - today.getTime()
        var days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 *60))
     var minutes = Math.floor((distance % (1000 *60 *60))/(1000 *60))
        var seconds  = Math.floor((distance % (1000 * 60))/1000)
    }
    useEffect(()=>{
        getNotification()
    },[])
    return (
        <ScrollView style={{backgroundColor:'white', flex: 1}} >
            <View style={{ marginTop: '2%',  }}>
                <View style={Styles.head}>
                    <TouchableOpacity style={Styles.header} onPress={navigation.goBack()}>
                        <Icon name={'arrow-back'}  color= '#1C5248' style={{ fontWeight: '700', marginTop: '17%' }} onPress={() => navigation.goBack()} />
                        <Text style={Styles.textHead}>Notifications</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ margin: '1%' }}>
                    {
                        NotifyGuest.map(data =>
                            <View key={data._id} style={Styles.notify}>
                                <View style={{ paddingLeft: '2%' }}>
                                    <Text style={{paddingLeft:'2%',color:'#d8d8d8',paddingRight:'2%',width:'80%'}}>{data.message}</Text>
                                    <Text style={Styles.hotelname}>{data.hotelname}</Text>
                                    
                                </View>
                                <Avatar size={'medium'} source={{uri:data.hotelImage}}  />
                            </View>
                        )
                    }
                </View>
            </View>
        </ScrollView>
    )
}
const Styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: '4%',
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
     
        marginTop: '-10%',
        paddingTop: '14%',
        padding: '2%',
        borderBottomLeftRadius: 5, borderBottomEndRadius: 5
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