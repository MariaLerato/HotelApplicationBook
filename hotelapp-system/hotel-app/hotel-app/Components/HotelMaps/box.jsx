import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import info from '../info'
import { Avatar,Icon } from 'react-native-elements'

const CallOut = ({ data }) => {
    return (
        <>
            {
                info.hotels.map(data=>
                    
                    <View>
                <View style={{
                    width: "70%",
                    height: "100%",
                    marginRight: 10,
                    borderWidth: 0.5, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,

                    elevation: 2,
                }}>
                    <Avatar rounded source={data.image} size=
                    {'small'}/>
                    <View>
                    <Text> {data.hotelname} </Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="star" type="font-awesome" color={'red'} />
                        <Text>{data.review}</Text>
                    </View>
                </View>
                </View>
               
            </View>)
            }
        </>
    )
}
export default CallOut