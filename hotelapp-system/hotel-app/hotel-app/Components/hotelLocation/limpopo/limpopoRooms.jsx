import React from 'react';
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,Image} from 'react-native'
import { Icon } from 'react-native-elements';
import HotelRooms from '../../room/maping'

const  Limpoporooms = ({ navigation,route }) => {
 const number = route.params.number
 const main = route.params.main
    return (
        <ScrollView style={Styles.container} >
            <View style={Styles.header}>
                <Icon name={'arrow-back'} color={'#1C5248'} style={{ fontWeight: '700', marginTop: '17%' }} onPress={() => navigation.goBack()} />
                <Text style={Styles.textHead}>Our Rooms</Text>
            </View>
            <View>
                {
                    HotelRooms.jhb.map(data =>
                        <View key={data.id}>
                            <View style={Styles.subHead}>
                                <TouchableOpacity onPress={() => navigation.navigate('detail',{
                                    id:data.name,
                                    price:data.price,
                                    des:data.description,
                                    number:number,
                                    main:main
                                })}>
                                    <Text style={Styles.RoomHead}>
                                        {data.name}
                                    </Text>
                                </TouchableOpacity>
                                <Text style={Styles.price}>R {data.price}</Text>
                            </View>
                            <View>
                                <Text style={Styles.subtext}>{data.description}</Text>
                            </View>
                            <View style={Styles.facilities}>
                                {
                                    HotelRooms.facility.map(action =>
                                        <>
                                            <View key={action.id}>
                                                <Icon name={action.name} type={action.type} color={'#447E74'} />
                                                <Text style={Styles.text}>{action.tyName}</Text>
                                            </View>
                                        </>
                                    )
                                }
                            </View>
                            <ScrollView horizontal style={{ padding: '2%' }}>
                                <TouchableOpacity style={Styles.touchable} onPress={() => navigation.navigate(data.navigate,{pic:data.pic1})}>
                                    <Image source={data.pic1} style={{ width: 200,borderRadius:20 ,height:150}}  /></TouchableOpacity>
                                <TouchableOpacity style={Styles.touchable} onPress={() => navigation.navigate(data.bath,{pic:data.pic2})}>
                                    <Image source={data.pic2} style={{ width: 200,borderRadius:20,height:150 }}  /></TouchableOpacity>
                                    <TouchableOpacity style={Styles.touchable} onPress={() => navigation.navigate(data.other,{pic:data.pic3})}>
                                    <Image source={data.pic3} style={{ width: 180,borderRadius:20,height:150 }}  /></TouchableOpacity>
                            </ScrollView>
                        </View>)
                }
            </View>

        </ScrollView>
    )
}
const Styles = StyleSheet.create({
    container: {
        marginTop: '10%'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: '2%'
    },
    textHead: {
        color: '#1C5248',
        fontSize: 26,
        paddingLeft: '5%',
        fontWeight: '700'
    },
    subHead: {
        display: 'flex',
        flexDirection: 'row',
        padding: '2%',
        justifyContent: 'space-between'
    },
    RoomHead: {
        color: '#1C5248',
        fontSize: 20
    },
    price: {
        color: '#06AC8E',
        fontSize: 17,
        margin: '1%'
    },
    subtext: {
        color: '#B2B2B2',
        padding: '2%',
        fontSize: 16
    },
    facilities: {
        display: 'flex',
        flexDirection: 'row',
        width: '60%',
      justifyContent:'flex-start'
    },
    text: {
        width: '60%',
        marginLeft: '17%',
        textAlign: 'center',
        color: '#8BA9A3'
    },
    touchable: {
        padding: '1%'
    }

})
export default Limpoporooms