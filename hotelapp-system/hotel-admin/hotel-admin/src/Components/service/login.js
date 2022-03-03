import firebase from 'firebase'
import React from 'react'

const db = firebase.ref('/users')
const _db = firebase.ref('/users')
const auth = firebase.app.auth()

class User{
    signIn(email,password,navigate){
        firebase.app.auth().signInWithEmailAndPassword(email,password).then(res =>{
            res.user.sendEmailVerification().then(data =>{
                console.log('Verification email sent')
                firebase.ref('/user').child(res.user.uid).set({
                    email:email,
                    uid:res.user.uid,
                    password:password
                })
                if(res.user.emailVerified){
                    console.log('email verified')
                }
            }).catch(err =>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err.message)
        })
        
    }
}
export default new User()