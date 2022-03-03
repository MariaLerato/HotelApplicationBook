import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

const Message = ({navigation})=>{
    return(
        <View style={Styles.container}>
            <View style={Styles.card}>
                <Text style={{fontSize:26,color:'white',}}>
                    Thank You For Using Our App,A Notification Will Be Send When Your Room Is Ready.Your Feedback Will Be Very Much Appreciated.
                </Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'90%',marginTop:'10%',padding:'2%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('feedback')}><Text style={{color:'#1C5248',fontSize:22}}>Feedback</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('home')}><Text  style={{color:'#1C5248',fontSize:22}}>Home</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:'4%'
    },
    card:{
        justifyContent:'center',
        backgroundColor:'#75BFB2',
        padding:'10%',
        borderRadius:30
    }
})
export default Message