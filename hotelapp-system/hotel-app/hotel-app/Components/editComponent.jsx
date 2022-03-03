import React,{useState} from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image ,} from 'react-native'
import { Icon, Avatar } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker'
import BackendInfo from './service/service'

const EditComponent = ({data,navigation})=>{
    const [image, setImage] = useState(data.image)
    const [name, setName] = useState(data.name)
    const [surname, setSurname] = useState(data.surname)
    const [email, setEmail] = useState(data.email)
    const [Client, setClient] = useState([])
    const [password, setPassword] = useState(data.password)
    const [userId, setId] = useState(data.userId)

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
    const date = new Date()
    const PostClient=(e)=> {
        const newClient = {
            name,
            surname,
            image,
            email,
            password,
            userId,
            date
        };
        console.log('update this',newClient)
        BackendInfo.updateClient(newClient)
            .then((res) => {
                console.log('response',res.data)
            }).catch((e) => {
                console.log(e)
            })
        navigation.goBack()
    }

return(
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
        <TouchableOpacity onPress={PostClient}>
            <Text style={{color:'white',fontSize:20}}>Done</Text>
        </TouchableOpacity>
    </View>
    <View style={{alignItems:'center',marginTop:'4%'}}>
         {!image?(<>
                <ProfilePicture
                    isPicture={false}
                    shape={'circle'}
                    user={data.name}
                    width={100}
                    height={100}
                    backgroundColor={'white'}
                    userTextColor={'#1C5248'}
                    />
                        </>):(
                    <Avatar source={{ uri:image.localUri }} rounded style={{ width: 100, height: 100, borderRadius: 50 }}/>
                    )}
   
   <TouchableOpacity onPress={openImagePickerAsync}>
                        <Text style={{ color: 'white', fontSize: 24, marginBottom: '2%' }}>Change Profile Picture</Text>
                    </TouchableOpacity>
    </View>
     
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <TextInput  label={'First Name'} value={name} onChangeText={(e) => setName(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput  label={'Last Name'} value={surname} onChangeText={(e) => setSurname(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput  label={'Email Address'} value={email} onChangeText={(e) => setEmail(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput type={'password'} label={'Old Password'} value={password} onChangeText={(e) => setPassword(e)} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                        <TextInput  label={'New Password'} style={{ backgroundColor: '#E8FDF9', borderRadius: 10, width: '80%', margin: '2%' }} />
                    </View>
    </>
)
}
export default EditComponent