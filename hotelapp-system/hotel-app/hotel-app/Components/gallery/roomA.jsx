import React from 'react';
import {View,Image,Text,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native'

const RoomA = ({navigation,route})=>{
    const pic = route.params.pic
    return(
        <>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.container}>
                <ImageBackground source={{uri:pic}} style={{width:'100%',height:'100%'}}>
                    <Text style={styles.text}>1/3</Text>
                </ImageBackground>
            </TouchableOpacity>
        </>
    )
}
const styles= StyleSheet.create({
   
    text:{
        color:'white',
        fontSize:28,
        alignSelf:'center',
        marginTop:'auto',
        fontWeight:'700'
    }
})
export default RoomA