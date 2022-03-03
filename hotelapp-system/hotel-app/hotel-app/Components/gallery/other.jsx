import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native'

const RoomB = ({navigation,route})=>{
    const pic = route.params.pic
    return(
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.container}>
        <ImageBackground source={pic} style={{width:'100%',height:'100%'}}>
            <Text style={styles.text}>3/3</Text>
        </ImageBackground>
        </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        width:'100%'
    },
    text:{
        color:'white',
        fontSize:24,
        alignSelf:'center',
        marginTop:'170%'
    }
})
export default RoomB