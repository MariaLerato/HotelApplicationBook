import React,{useEffect} from "react";
import {View,Text,SafeAreaView,Image,StyleSheet} from "react-native"

const SplashScreen = ({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('WelcomeScreen')
        },3000);
    })
   
    return (
        <View style={styles.Container}>
            <Image source={require('../../assets/SplashImage.png')} resizeMode='contain' style={styles.Image} />
                <View style={styles.TextContainer}>
                    <Text style={styles.headerText}>Montello</Text>
                    <Text style={styles.subtext}>Hotel App</Text>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image:{
        height:150,

    },
    TextContainer:{
        padding:'2%',
        fontFamily:'Roboto Mono'
    },
    headerText:{
        color:'#61B0A2',
        fontSize:48,
        fontWeight:'600'
    },
    subtext:{
        alignSelf:'center',
        fontSize:30,
        color:'#858181'
    }
})
export default SplashScreen