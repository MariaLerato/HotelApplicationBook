import React from 'react';
import {Image,Text,View,ScrollView,TouchableOpacity,StyleSheet,FlatList} from 'react-native'
import { Icon } from 'react-native-elements';
import Info from '../../info';

const VendaHotels = ({navigation,route})=>{
    const number = route.params.number
    return(
        <>
        <View >
            <View style={{width:'100%',display:'flex',flexDirection:'row',marginTop:'10%',alignItems:'center',marginLeft:'2%',padding:'2%'}}>
               <TouchableOpacity onPress={()=>navigation.goBack()} ><Icon name={'arrow-back'} size={25} color= {'#1C5248'}/></TouchableOpacity>
                <Text style={{fontSize:25,paddingLeft:"8%",color: '#1C5248'}}>Venda Hotels</Text>
            </View>
               <ScrollView>
               <View>
            {
                Info.venda.map(data=>
                    <>
                        <View style={{flex:1,display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'2%'}} key={data.id}>
                        <TouchableOpacity  onPress={()=>navigation.navigate(data.nav,{
                            number:number,main:data.image
                        })} >
                            <Image
                            source={data.image}
                            style={{width:140,height:150,borderRadius:30,borderWidth:2,borderColor:'white' }}
                            ></Image>    
                            </TouchableOpacity> 
                            <View>
                                <Text style={{marginTop:'1%',fontSize:20,color: '#1C5248',fontWeight:'700',paddingLeft:'1%'}}>
                                    {data.hotelname}
                                </Text>
                                <Text style={{width:'30%',paddingLeft:'1%'}}>{data.description}</Text>
                                <TouchableOpacity  onPress={()=>navigation.navigate('review')}>
                                    <Text style={{ color:'#F24C04',fontSize:18,paddingLeft:'1%'}}>{data.review}</Text>
                                </TouchableOpacity>
                            </View>
                                   
                        </View>
                    </>)
            }
        </View>
               </ScrollView>
        </View>
        </>
    )
}
export default VendaHotels