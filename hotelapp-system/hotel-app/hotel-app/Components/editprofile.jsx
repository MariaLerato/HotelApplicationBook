import React,{useState,useEffect} from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image ,} from 'react-native'
import { Icon, Avatar } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker'
import BackendInfo from './service/service'
import firebase from './firebase/firebase'
import EditComponent from './editComponent'
import ProfilePicture from 'react-native-profile-picture'
// const auth = firebase.app.auth()
// const user = auth.currentUser.uid

const Editprofile = ({navigation}) => {
    console.log('jshdfl')
    const [client,setClient] = useState([])
   const userId =   firebase.app.auth().currentUser.uid
   const Clientemail = firebase.app.auth().currentUser.email
//    const pass = firebase.app.auth().currentUser.password
   const [image, setImage] = useState('')
   const [name, setName] = useState('')
   const [surname, setSurname] = useState('')
   const [email, setEmail] = useState(Clientemail)
//    const [Client, setClient] = useState([])
   const [password, setPassword] = useState('')
   const [phone,setPhone] = useState('')
   const [address,setAddress] = useState('')
//    const [us, setId] = useState(userId)
   console.log('userId------------------',userId);
   const date = new Date()
   let openImagePickerAsync = async ()=>{
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(permissionResult.granted===false){
        alert("Permissionn to access camera roll is required")
        return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if(pickerResult.cancelled===true){
        return;
    }
    setImage({localUri:pickerResult.uri})
    console.log(pickerResult)
}
    const GetClient = ()=>{
        BackendInfo.getClient()
        .then((res)=>{
            console.log(res.data)
            setClient(res.data)
        })
    }
    async function CreateClient(){
        const newClient = {
            name,
            surname,
            image,
            email,
            phone,
            address,
            userId,
            date
        }
        BackendInfo.postClient(newClient)
        .then((res)=>{
            console.log('success',res.data);
        }).catch((e)=>{
            console.log('posting error',e)
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
            {userId === data.userId ?(
                  <EditComponent data={data} navigation={navigation}/>
            ):(
                <>
                <View style={{color:'white',
                    flexDirection:'row',
                    marginTop:'8%',
                    justifyContent:'space-between',
                    padding:'2%'}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Icon name='arrow-back' size={25} color={'white'}/>
                    </TouchableOpacity>
                    <Text style={{color:'white',fontSize:25}}>Edit Profile</Text>
                    <TouchableOpacity onPress={CreateClient}>
                        <Text style={{color:'white',fontSize:20}}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center',marginTop:'4%'}}>
                {!image?(<>
                <ProfilePicture
                    isPicture={false}
                    shape={'circle'}
                    user={data.name}
                    width={80}
                    height={80}
                    backgroundColor={'white'}
                    userTextColor={'#1C5248'}
                    />
                        </>):(
                    <Avatar source={{ uri:image.localUri }} rounded style={{ width: 100, height: 100, borderRadius: 70 }}/>
                    )}
               <TouchableOpacity onPress={openImagePickerAsync}>
                                    <Text style={{ color: 'white', fontSize: 24, marginBottom: '2%' }}>Change Profile Picture</Text>
                                </TouchableOpacity>
                </View>
                 
                                <View style={{ width: '100%', alignItems: 'center' }}>
                                    <TextInput  label={'First Name'} value={name} onChangeText={(e) => setName(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                                    <TextInput  label={'Last Name'} value={surname} onChangeText={(e) => setSurname(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                                    <TextInput  label={'Email Address'} value={email} onChangeText={(e) => setEmail(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                                    <TextInput  label={'Phone Number'} value={phone} onChangeText={(e) => setPhone(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} keyboardType={'number-pad'} />
                                    <TextInput  label={'Physical Address'} value={address} onChangeText={(e)=>setAddress(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                                </View>
                </>
            )}
          
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