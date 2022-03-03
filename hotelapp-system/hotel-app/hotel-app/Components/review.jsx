import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements';

const Review = ({ navigation }) => {
    return (
        <ScrollView style={{marginTop:'10%'}}>

            <View style={Styles.header}>
                <Icon name={'arrow-back'} color={'#C4C4C4'} style={{ fontWeight: '700', marginTop: '20%' }} onPress={() => navigation.goBack()} />
                <Text style={Styles.textHead}>Review</Text>
            </View>
            <View style={{borderBottomColor:'#EBE9E9',borderBottomWidth:1,padding:'1%'}}>
                <View style={Styles.header}>
                    <Image source={require('../assets/megan.png')} style={{width:'20%',height:70}} />
                    <View style={{padding:'2%'}}>
                        <Text style={{fontSize:24,color:'#1C5248'}}>Megan Foire</Text>
                        <Text style={{color:'#C4C4C4',fontSize:15}}>Cape Town</Text>
                    </View>
                </View>
                <View style={{padding:'2%'}}>
                    <Text>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas pharetra, commodo nulla varius id pretium.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                        <View style={Styles.icon}>
                            <Icon name={'star'} type={'font-awesome'} color={'#FAA455'}/>
                            <Icon name={'star'} type={'font-awesome'} color={'#FAA455'}/>
                            <Icon name={'star'} type={'font-awesome'} color={'#FAA455'}/>
                            <Icon name={'star'} type={'font-awesome'} color={'#FAA455'}  />
                            <Icon name={'star-half-o'} type={'font-awesome'} color={'#FAA455'}/>
                        </View>
                
                        <ScrollView horizontal style={{padding:'2%'}}>
                            <View  style={Styles.rooms}><Image source={require('../assets/beach.png')} style={{width:130,borderRadius:10,height:150}} ></Image></View>
                            <View  style={Styles. rooms}><Image source={require('../assets/zinc.png')} style={{width:130,borderRadius:10,height:150}} ></Image></View>
                            <View  style={Styles. rooms}><Image source={require('../assets/bedding.png')} style={{width:130,borderRadius:10,height:150}} ></Image></View>
                        </ScrollView>
                       

                </View>
            </View>
            <View style={{borderBottomColor:'#EBE9E9',borderBottomWidth:1,padding:'1%'}}>
                <View style={Styles.header}>
                    <Image source={require('../assets/douglous.png')} style={{width:'20%',height:70}} />
                    <View style={{padding:'2%'}}>
                        <Text style={{fontSize:24,color:'#1C5248'}}>Maria Douglous</Text>
                        <Text style={{color:'#C4C4C4',fontSize:15}}>Johannesburg</Text>
                    </View>
                </View>
                <View style={{padding:'2%'}}>
                    <Text>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas pharetra, commodo nulla varius id pretium.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                        <View style={Styles.icon}>
                            <Icon name={'star'} type={'font-awesome'} color={'#FAA455'}/>
                            <Icon name={'star'} type={'font-awesome'} color={'#FAA455'}/>
                            <Icon name={'star'} type={'font-awesome'} color={'#FAA455'}/>
                            
                            <Icon name={'star-half-o'} type={'font-awesome'} color={'#FAA455'}/>
                        </View>
                
                        <ScrollView horizontal style={{padding:'2%'}}>
                            <View  style={Styles.rooms}><Image source={require('../assets/lounge.png')} style={{width:130,borderRadius:10,height:150}} ></Image></View>
                            <View  style={Styles. rooms}><Image source={require('../assets/beach2.png')} style={{width:130,borderRadius:10,height:150}} ></Image></View>
                            <View  style={Styles. rooms}><Image source={require('../assets/bed2.png')} style={{width:130,borderRadius:10,height:150}} ></Image></View>
                        </ScrollView>
                       

                </View>
            </View>
            <View style={{borderBottomColor:'#EBE9E9',borderBottomWidth:1,padding:'1%'}}>
                <View style={Styles.header}>
                    <Image source={require('../assets/male.png')} style={{width:'20%',height:70}} />
                    <View style={{padding:'2%'}}>
                        <Text style={{fontSize:24,color:'#1C5248'}}>Christopher Evans</Text>
                        <Text style={{color:'#C4C4C4',fontSize:15}}>Durban</Text>
                    </View>
                </View>
                <View style={{padding:'2%'}}>
                    <Text>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Egestas pharetra, commodo nulla varius id pretium.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                        <View style={Styles.icon}>
                            <Icon name={'star'} type={'font-awesome'} color={'#FAA455'}/>
                            <Icon name={'star'} type={'font-awesome'} color={'#FAA455'}/>
                            <Icon name={'star'} type={'font-awesome'} color={'#FAA455'}/>
                            
                            <Icon name={'star-half-o'} type={'font-awesome'} color={'#FAA455'}/>
                        </View>
                
                        <ScrollView horizontal style={{padding:'2%'}}>
                            <View  style={Styles.rooms}><Image source={require('../assets/lounge.png')} style={{width:130,borderRadius:10,height:150}} ></Image></View>
                            <View  style={Styles. rooms}><Image source={require('../assets/beach2.png')} style={{width:130,borderRadius:10,height:150}} ></Image></View>
                            <View  style={Styles. rooms}><Image source={require('../assets/bed2.png')} style={{width:130,borderRadius:10,height:150}} ></Image></View>
                        </ScrollView>
                       

                </View>
            </View>
        </ScrollView>
    )
}
const Styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: '4%'
    },
    textHead: {
        color: '#1C5248',
        fontSize: 24,
        paddingLeft: '30%',
        fontWeight: '600',
        marginTop: '-2%'

    },
    icon:{
        display: 'flex',
        flexDirection: 'row',
        padding:'2%'
    },
    rooms:{
        
        padding: '1%'
    }
})
export default Review