import React,{useState,useEffect} from 'react'
import BackendInfo from './service/service'
import {Text,StyleSheet,View,ScrollView,TouchableOpacity} from 'react-native'
import { Avatar,Icon } from 'react-native-elements'
import EditComponent from './editComponent'

const Editprofile = ({navigation}) => {
    console.log('jshdfl')
    const [client,setClient] = useState([])
    const GetClient = ()=>{
        BackendInfo.getClient()
        .then((res)=>{
            console.log(res.data)
            setClient(res.data)
        })
    }
    useEffect(()=>{
        GetClient()
    },[])
  return (
<ScrollView style={Styles.container}>
    
    <View>
        {client.map(data=>
            <>
            <EditComponent data={data} navigation={navigation}/>
            </>
            )}
    </View>
</ScrollView>
  )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#64D3BF'
    },
    header:{
        color:'white',
        flexDirection:'row',
        marginTop:'8%',
        justifyContent:'space-between',
        padding:'2%'
    }
})
export default Editprofile