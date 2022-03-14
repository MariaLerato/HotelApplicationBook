import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Avatar } from 'react-native'
import { Icon } from 'react-native-elements';
import { img } from './gallery/reusables';
import BackendInfo from './service/service'
import ProfilePicture from 'react-native-profile-picture';
import User from './firebase/authentication'
import firebase from './firebase/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Profile = ({ navigation, route,uid }) => {
    const [client, setClient] = useState([])
    const [isLoaded,setIsLoaded] = useState(false)
    const [image,setImage] = useState()
    const userId = firebase.app.auth().currentUser.uid
    // console.log('uid',uid)
    // const auth = firebase.app.auth()
    // const user = auth.currentUser.uid
  

    const retrieveData = (e) => {
        BackendInfo.getClient()
            .then((res) => {
                console.log('client',res.data)
                setIsLoaded(true)
                setClient(res.data)
            })
    }
    const LogOut = ()=>{
        User.logOut(navigation)
    }
    useEffect(() => {
        retrieveData()
    }, [])
    return (
        <View style={Styles.container}>
            {client.map(data =>
                    <>
                    {userId === data.userId?(
                         <View style={Styles.header}>
                        <Image source={{ uri:data.image.localUri}} style={{ width: 160, height: 160, borderRadius: 70, borderColor: 'white', borderWidth: 5, marginTop: '-8%' }}></Image>
                        <Text style={Styles.headText}>{data.name} {data.surname}</Text>
                        </View>   
                    ):(
                        null
                    )}
                                    
                    </>
                )
            }
            <TouchableOpacity onPress={() => navigation.navigate('editprofile')} style={Styles.edit}>
                            <Text style={{ color: 'black', fontSize: 24, fontWeight: '600' }}>Edit Profile</Text>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={LogOut} style={Styles.touchableOpacity}>
                             <Icon name='logout' size={25} color={'white'} />
                            <Text style={Styles.touchableText}>Logout</Text>
                        </TouchableOpacity >
                      
        </View>
    )
    {/* <ScrollView style={Styles.history}>
            </ScrollView> */}
    {/* <View style={Styles.historyHead}>
                    <Icon name={'trash'} type={'font-awesome'} color='#4C9285' />
                    <Text style={{ color: '#1C5248', fontWeight: '700', fontSize: 18, marginLeft: '30%' }}>My History </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('searchHistory')}><Icon name={'search'} type={'font-awesome'} color='#4C9285' style={{ alignSelf: 'flex-end', marginLeft: '20%' }} /></TouchableOpacity>
                </View>
                <View style={{ width: '100%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', padding: '1%' }}>

                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/pretoria.png')} style={{ width: 180, height: 150, padding: '2%', margin: '2%', borderRadius: 40, overflow: 'hidden' }} >
                                <View style={Styles.textContainer}>
                                    <Text style={{ color: '#C4C4C4', fontSize: 20 }}>Hotel Name </Text>
                                    <Text style={{ color: '#FAA455' }} >Reviews</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground source={img.hotel10} style={{ width: 175, height: 180, padding: '2%', margin: '2%', borderRadius: 20,overflow:'hidden' }}>
                            <View style={Styles.textContainer}>
                                    <Text style={{ color: '#C4C4C4', fontSize: 20 }}>Hotel Name </Text>
                                    <Text style={{ color: '#FAA455' }} >Reviews</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', padding: '1%' }}>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/sandton.png')} style={{ width: 180, height: 226, marginTop: '-15%', margin: '2%', borderRadius: 20, overflow: 'hidden' }}>
                                <View style={Styles.textContainer}>
                                    <Text style={{ color: '#C4C4C4', fontSize: 20 }}>Hotel Name </Text>
                                    <Text style={{ color: '#FAA455' }} >Reviews</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground source={require('../assets/palm.png')} style={{ width: 185, height: 190, margin: '1%', borderRadius: 30 ,overflow:'hidden'}} >
                            <View style={Styles.textContainer}>
                            <Text style={{color:'#C4C4C4',fontSize:20}}>Hotel Name </Text>
                            <Text style={{color:'#FAA455'}} >Reviews</Text>
                        </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View> */}


}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    user: {
        width: 90,
        height: 90,
        borderRadius: 40
        , borderColor: 'white',
        borderWidth: 1
    },
    header: {
        alignSelf: 'center',
        justifyContent: 'center',
        // backgroundColor: 'white',
        
        width: '100%',
        alignItems: 'center'
    },
    headText: {
        color: '#1C5248',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: '5%',
      
    },
    edit: {
        backgroundColor: '#EBE9E9',
        height: 60,
        marginTop: '2%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
        width: '80%',
        borderColor: 'black',
    },
    history: {
        marginTop: '4%',
        backgroundColor: '#EBE9E9',
        borderTopStartRadius: 40,
        borderTopEndRadius: 20,

    },
    historyHead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '4%'
    },
    textContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: 65,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        padding: '4%',
        borderRadius: 15,
        marginBottom: '4%'
    },
    touchableOpacity: {
        backgroundColor: '#06AC8E',
        height: 68,
        marginTop: '4%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
        width: '80%',
        paddingLeft:'2%',
        flexDirection:'row',
        borderColor: 'rgba(0,0,0,.2)',
    },
    touchableText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: '600'
    },
    touchable:{
        marginBottom:'2%',
        marginTop:'2%'
    }

})
export default Profile