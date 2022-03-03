import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,ImageBackground} from 'react-native'
import { Icon,Input } from 'react-native-elements'

const SearchHistory = ({navigation})=>{
    return(
        <>
        <View style={{marginTop:'8%',backgroundColor:'#EBE9E9',alignItems:'center',borderTopStartRadius:20,borderTopEndRadius:20,flex:1}}>
        <Icon name={'arrow-back'} color={'#1C5248'} style={{fontWeight:'700',marginTop:'17%',}} onPress={()=>navigation.goBack()} />
               <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'4%'}}>
                    <Input  
                    placeholder={'       Search History'}
                    leftIcon={<Icon name={'search'} type={'font-awesome'} color='#4C9285'/>}
                    />
                    {/* <Icon name={'search'} type={'font-awesome'} color='#4C9285' style={{alignSelf:'flex-end',marginLeft:'20%'}}/> */}
               </View>
               <View style={{width:'100%'}}>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                       <ImageBackground source={require('../assets/pretoria.png')} style={{width:150,height:150,padding:'2%',margin:'2%'}}>
                           <Text style={{alignSelf:'flex-end',marginTop:'85%',color:'white'}}>Sandton Sun Hotel</Text>
                       </ImageBackground>
                       <ImageBackground source={require('../assets/sun.png')} style={{width:177,height:210,margin:'2%',borderRadius:70}}>
                           <Text style={{alignSelf:'flex-end',marginTop:'95%',color:'white'}}>Hotel Sandton Star</Text>
                       </ImageBackground>
                   </View>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                       <ImageBackground source={require('../assets/sandton.png')} style={{width:150,height:226,marginTop:'-15%',margin:'2%'}}>
                           <Text style={{alignSelf:'flex-end',marginTop:'120%',color:'white'}}>Luxurious Hotel</Text>
                       </ImageBackground>
                       <ImageBackground source={require('../assets/palm.png')} style={{width:177,height:110,margin:'1%'}}>
                           <Text style={{alignSelf:'flex-end',marginTop:'45%',color:'white'}}>Palm Hotel</Text>
                       </ImageBackground>
                   </View>
                   <View style={{display:'flex',flexDirection:'row',padding:'1%'}}>
                       <ImageBackground source={require('../assets/maslow.png')} style={{width:150,height:150,padding:'2%',margin:'2%'}}>
                           <Text style={{alignSelf:'flex-end',marginTop:'85%',color:'white'}}>Signature Hotel</Text>
                       </ImageBackground>
                       <ImageBackground source={require('../assets/protea.png')} style={{width:177,height:210,margin:'2%',borderRadius:70,marginTop:'-15%'}}>
                           <Text style={{alignSelf:'flex-end',marginTop:'95%',color:'white'}}>Hotel @ Hatfield</Text>
                       </ImageBackground>
                   </View>
               </View>
            </View>
        </>
    )
}
export default SearchHistory