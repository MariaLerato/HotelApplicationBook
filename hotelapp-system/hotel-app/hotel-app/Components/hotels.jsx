import React from 'react'
import {View,TouchableOpacity,Text,Image,ImageBackground, FlatList, SafeAreaView,StyleSheet,ScrollView} from 'react-native'
import info from './info'
import { Icon } from 'react-native-elements'

const HotelScreen = ({navigation})=> {
    return(
        <ScrollView>
       <View style={styles.container}>
           <View style={styles.header}>
                <Icon name={'arrow-back'} color={'#1C5248'} style={{fontWeight:'700',marginTop:'14%'}} onPress={()=>navigation.goBack()} />
                <Text style={styles.textHead}>View Hotels By Location</Text>
           </View>
            <Text style={styles.subHeading}>Sandton</Text>
         <ScrollView horizontal style={styles.imageContainer}>
         {
                info.hotels.map(data=>
                    <View style={styles.images} key={data.id}>
                        <ImageBackground source={data.image} style={{width:150,height:188,}} key={data.id}>
                            <View style={styles.textContainer} >
                                <Text style={styles.hotelName} onPress={()=>navigation.navigate('hotelrooms')}>{data.hotelname}</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate('review')}><Text style={styles.reviews}>{data.review}</Text></TouchableOpacity>
                            </View>
                        </ImageBackground>
                        
                    </View>
                    )
            }
           </ScrollView >
           <Text style={styles.subHeading}>Pretoria</Text>
         <ScrollView horizontal style={styles.imageContainer}>
         {
                info.pretoria.map(data=>
                    <View style={styles.images} key={data.id}>
                        <ImageBackground source={data.image} style={{width:150,height:188,}} key={data.id}>
                            <View style={styles.textContainer} >
                                <Text style={styles.hotelName} onPress={()=>navigation.navigate('hotelrooms')} >{data.hotelname}</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('review')}><Text style={styles.reviews}>{data.review}</Text></TouchableOpacity>
                            </View>
                        </ImageBackground>
                        
                    </View>
                    )
            }
           </ScrollView>
           <Text style={styles.subHeading}>Johannesburg</Text>
         <ScrollView horizontal style={styles.imageContainer}>
         {
                info.jbh.map(data=>
                    <View style={styles.images} key={data.id}>
                        <ImageBackground source={data.image} style={{width:150,height:188,}} key={data.id}>
                            <View style={styles.textContainer} >
                                <Text style={styles.hotelName} onPress={()=>navigation.navigate('hotelrooms')} >{data.hotelname}</Text>
                                <TouchableOpacity onPress={()=>navigation.navigate('review')}><Text style={styles.reviews}>{data.review}</Text></TouchableOpacity>
                            </View>
                        </ImageBackground>
                        
                    </View>
                    )
            }
           </ScrollView>
       </View>
        </ScrollView>
    )
}
const styles= StyleSheet.create({
    container:{
        marginTop:'8%',
        flex:1
    },
    header:{
        display:'flex',
        flexDirection:'row',
        padding:'2%'
    },
    textContainer:{
        backgroundColor:'white',
        margin:'auto',
       marginTop:'55%',
        width:'85%',
        paddingLeft:'3%',
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:20,
        textAlign:'center'
        ,height:'40%'
    },
    hotelName:{
        color: '#B2B2B2',
        fontSize:17,
        fontWeight:'600'
    },
    reviews:{
       color: '#FAA455'
    },
    images:{
        padding:'1%'
    },
    imageContainer:{
        backgroundColor:'#EEE9E9',
        marginTop:'3%',
    
        margin:'2%',
        padding:'3%',
    
    },
    textHead:{
        color:'#1C5248',
        fontSize:24,
        paddingLeft:'13%'
    },
    subHeading:{
        color:'#1C5248',
        fontSize:24,
        fontWeight:'700',
        padding:'3%'
    }
})
export default HotelScreen