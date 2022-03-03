import React from 'react';
import {View,Text,StyleSheet} from 'react-native'
import Info from '../info';

const Alert = ({navigation})=>{
    return(
        <>
            <View style={styles.container}>
              
              {
                  Info.info.map(data =>
                      <View style={styles.message}>
                          <Text style={styles.text}>
                              An email has been sent to {data.email}.Verify your email and click on the link to reset your password
                          </Text>
                         
                          </View>
                          )
              }
              <Text style={styles.back} onPress={()=>navigation.navigate('SignIn')}>Go back</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message:{
        backgroundColor:'#61B0A2',
        padding:'4%',
        borderRadius:40,
        width:'80%',
        height:'30%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text:{
        color:'white',
        padding: '4%',
        fontSize:20
    },
    back:{
        color:'#1C5248',
        padding: '4%',
        fontSize:20,
        fontWeight:'700'
    }
})
export default Alert