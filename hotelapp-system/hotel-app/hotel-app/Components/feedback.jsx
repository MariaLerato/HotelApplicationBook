import React from 'react';
import {View,Text,TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements';

const Feedback = ({navigation})=>{
    return(
        <>
        <View style={{marginTop:'10%',padding:'4%'}}>
            <View style={Styles.header}>
                <Icon name={'arrow-back'} color={'#1C5248'} style={{fontWeight:'700',marginTop:'17%'}} onPress={()=>navigation.goBack()} />
                <Text style={Styles.textHead}>Give Your Feedback!</Text>
           </View>
         <View style={{padding:'4%'}}>
         <Text style={{color:'#C4C4C4',fontWeight:'700',fontSize:24}}>
               Rate Our App
            </Text> 
           <View style={Styles.icon}>
                <Icon name={'star'} type={'font-awesome-5'} color={'#FAA455'}/>
                <Icon name={'star'} type={'font-awesome-5'} color={'#FAA455'}/>
                <Icon name={'star'} type={'font-awesome-5'} color={'#FAA455'}/>
                <Icon name={'star'} type={'font-awesome-5'} color={'#FAA455'}/>
                <Icon name={'star'} type={'font-awesome-5'} color={'#FAA455'}/>
           </View>
         </View>
           <View style={{marginTop:'10%'}}>
               <Text style={{color:'#1C5248',fontSize:20,padding:'2%'}}>
                   Give Feedback
               </Text>
               <TextInput
               numberOfLines={15}
               style={Styles.textbox}
               />
           </View>
           <TouchableOpacity style={Styles.touchableOpacity} onPress={()=>navigation.navigate('bottomTab')}><Text style={Styles.touchableText}>Submit</Text></TouchableOpacity>
        </View>
        </>
    )
}
const Styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: '2%'
    },
    textHead: {
        color: '#1C5248',
        fontSize: 28,
        paddingLeft: '8%',
        fontWeight: '700',
        marginTop: '-2%'

    },
    icon:{
        display: 'flex',
        flexDirection: 'row',
        padding:'2%'
    },
    textbox:{
        borderColor:'#EBE9E9',
        borderWidth:2
    },
    touchableOpacity:{
        backgroundColor:'#06AC8E',
        height:60,
        marginTop:'15%',
        borderRadius:40,
        alignItems:'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        width:'95%',
        borderColor:'rgba(0,0,0,.2)',
    },
    touchableText:{
        fontSize:28,
        color:'#FFFFFF',
        
       
    },
})
export default Feedback