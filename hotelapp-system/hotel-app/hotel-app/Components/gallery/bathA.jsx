import React from 'react';
import {View,Image,Text,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native'

const BathA = ({navigation,route})=>{
    const pic = route.params.pic
    return(
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.container}>
        <ImageBackground source={pic} style={{width:'100%',height:'100%'}}>
            <Text style={styles.text}>2/3</Text>
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
        fontSize:28,
        alignSelf:'center',
        marginTop:'auto',
        fontWeight:'700'
    }
})
export default BathA