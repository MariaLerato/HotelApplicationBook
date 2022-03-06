import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Input, Icon } from 'react-native-elements'
import * as Yup from 'yup'
import { Formik, Form } from 'formik';
import User from '../firebase/authentication'
import { TextInput } from 'react-native-paper';
import {registerIndieID} from 'native-notify'



const SignIn = ({ navigation,uid }) => {
    const [isVisible, setIsVisible] = React.useState(true)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
   

    const Change = () => {
        setIsVisible(!isVisible);
    };
 
    // console.log('uid',uid)
    const LogIn = () => {
        // alert(email)
       User.signIn(email,password,navigation)
        registerIndieID(`${uid}`,2214, 'NN6KNoOr2cYVZgro69Hq5Z')
    }
    const Validate = Yup.object({
        email: Yup.string().required('Invalid'),
        password: Yup.string().required('Invalid').min(4,'Too Short, Atleast 4 characters').max(8,'Too Long')
    })
    const PasswordView = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => Change()}
            >
                {isVisible ? (
                    <Icon name='eye-slash' type="font-awesome" style={{ marginLeft: 10 }} />
                ) : (
                    <Icon name='eye' type="font-awesome" style={{ marginLeft: 10 }} />
                )}
            </TouchableOpacity>
        )
    }
    return (
        <>
        {/* <TextInput value={email} tppe={'email'} onChangeText={(e)=>setEmail(e)}/> */}
         
                    <View style={{flex:1}}>
                        <View style={styles.SignInContainer}>
                            <Text style={styles.WelcomeText}>Welcome!</Text>
                        </View>
                        <View style={styles.Sign}>
                            <Text style={styles.title}>E-mail</Text>
                            <Input
                                placeholder=" Email Address"
                                style={styles.input}
                                value={email}
                                tppe={'email'}
                                // onBlur={handleBlur('email')}
                                onChangeText={(e)=>setEmail(e)}
                                leftIcon={<Icon name="envelope-o" type="font-awesome" color='#1C5248' />}
                            />
                            {/* {errors.email && touched.email ? (
                                <Text style={{ color: 'red', paddingLeft: '2%', fontSize: 12 }}>{errors.email}</Text>
                            ) : null} */}
                            <Text style={styles.title} >Password</Text>
                            <Input
                                placeholder=" Your Password"
                                style={styles.input}
                                value={password}
                                onChangeText={(e)=>setPassword(e)}
                                tppe={'password'}
                               
                                leftIcon={<Icon name="lock" type="font-awesome" color='#1C5248' />}
                                rightIcon={<PasswordView />}
                                secureTextEntry={isVisible}
                            />
                            <Text style={styles.password} onPress={() => navigation.navigate('resetpassword')}>Forgot Password?</Text>
                            <TouchableOpacity style={styles.touchableOpacity} onPress={LogIn}><Text style={styles.touchableText}>Sign In</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('SignUp')}><Text style={styles.touchabletext}>Sign Up</Text></TouchableOpacity>
                        </View>
                    </View>
                {/* )}
            </Formik> */}
        </>
    )
}
const styles = StyleSheet.create({
    SignInContainer: {
        height: '30%',
        backgroundColor: '#61B0A2',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    Sign: {
        backgroundColor: '#FFFFFF',
        marginTop: '-8%',
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        height: '100%',
        padding: '8%',
    
    },
    WelcomeText: {
        color: '#FFFFFF',
        fontSize: 48,
        padding: '4%',
        fontWeight: '700',
        marginTop:'14%'
    },
    input: {

    },
    title: {
        padding: '3%',
        fontSize: 24,
        color: '#1C5248'
    },
    password: {
        color: '#06AC8E',
        fontSize: 18
    },
    touchableOpacity: {
        backgroundColor: '#06AC8E',
        height: 60,
        marginTop: '8%',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        width: '98%',
        borderColor: 'rgba(0,0,0,.2)',
    },
    touchableText: {
        fontSize: 24,
        color: '#FFFFFF',

    },
    touchable: {
        backgroundColor: '#EBE9E9',
        height: 60,
        marginTop: '5%',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        width: '98%',
        borderColor: 'rgba(0,0,0,.2)',
    },
    touchabletext: {
        fontSize: 24,
        color: '#06AC8E',

    }
})
export default SignIn