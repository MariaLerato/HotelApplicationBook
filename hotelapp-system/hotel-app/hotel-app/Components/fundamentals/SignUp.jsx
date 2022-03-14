import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Input, Icon } from 'react-native-elements'
import * as Yup from 'yup'
import { Formik } from 'formik';
import User from '../firebase/authentication'
import firebase from '../firebase/firebase';

const SignUp = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(true)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirm, setConfirm] = useState()
    console.log(email)
    console.log(password)

        const Log = () => {
            User.signUp(email,password,navigation,confirm)
          
        }  
    const Validate = Yup.object({
        email: Yup.string().required('Invalid').email('Invalid Email'),
        password: Yup.string().max(8, 'Not more than 8 characters').min(4, 'Not less than 5 characters').required('Invalid')
        , confirm: Yup.string().matches(password).required('Invalid')
    })

    const Change = () => {
        setIsVisible(!isVisible);
    };
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
            <View style={styles.SignInContainer}>
                <Text style={styles.WelcomeText}>Register Now!</Text>
            </View>
            {/* <Formik
                initialValues={{
                    email: '', password: '', confirm: ''
                }}
                validateOnMount={true}
                validationSchema={Validate}
                onSubmit={values => Log(values.email, values.confirm, values.password)}
            >
                {({
                    errors, touched, handleChange, handleSubmit, handleBlur, values
                }) => ( */}
                    <View>
                        <View style={styles.Sign}>
                            
                            <Text style={styles.title}>E-mail</Text>
                            <Input
                                placeholder=" Email Address"
                                style={styles.input}
                                value={email}
                                onChangeText={(t)=>setEmail(t)}
                          
                                leftIcon={<Icon name="envelope-o" type="font-awesome" color='#1C5248' />}
                            />
                            {/* {errors.email && touched.email ? (
                                <Text>{errors.email}</Text>
                            ) : null} */}
                            <Text style={styles.title} >Password</Text>
                            <Input
                                placeholder=" Your Password"
                                style={styles.input}
                                leftIcon={<Icon name="lock" type="font-awesome" color='#1C5248' />}
                                rightIcon={<PasswordView />}
                                secureTextEntry={isVisible}
                                value={password}
                                onChangeText={(t)=>setPassword(t)}
                           
                            />
                              <Text style={styles.title}>Confirm</Text>
                            <Input
                                placeholder="Confirm Password"
                                style={styles.input}
                                leftIcon={<Icon name="user" type="font-awesome" color='#1C5248' />}
                                // rightIcon={<PasswordView />}
                                // secureTextEntry={isVisible}
                                value={password}
                                onChangeText={(t)=>setPassword(t)}
                             
                            />
                            {/* {errors.password && touched.password ? (
                                <Text>{errors.password}</Text>
                            ) : null} */}
                         
                            {/* {errors.confirm && touched.confirm ? (
                                <Text> {errors.confirm}</Text>
                            ) : null} */}
                            <Text>By sigining up you agree to the terms of the service and privacy policy</Text>
                            <TouchableOpacity style={styles.touchableOpacity} onPress={Log} ><Text style={styles.touchableText}>Sign Up</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('SignIn')}><Text style={styles.touchabletext}>Sign In</Text></TouchableOpacity>
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
        marginTop: '-12%',
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        height:'100%',
        padding: '6%'
    },
    WelcomeText: {
        color: '#FFFFFF',
        fontSize: 40,
        padding: '4%',
        fontWeight: '700'
    },
    input: {
        marginTop: '-2%'
    },
    title: {
        padding: 4,
        fontSize: 20,
        color: '#1C5248',
        marginTop: '-2%'
    },
    password: {
        color: '#06AC8E',
        fontSize: 18
    },
    touchableOpacity: {
        backgroundColor: '#06AC8E',
        height: 62,
        borderRadius: 40,
        alignItems: 'center',
        marginTop: '3%',
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
        height: 62,
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

    },
    terms: {
        padding: '4%'
    }
})
export default SignUp