import firebase from './firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'

const db = firebase.ref('/users')
const auth = firebase.app.auth()

class User{
     signUp(email,password,navigation,confirm) {
        return firebase.app.auth().createUserWithEmailAndPassword(email,password).then(res => {
         res.user.sendEmailVerification()
            .then(action => {
               navigation.navigate('passwordAlert')
                db.child(res.user.uid)
                .set({
                    password:password,
                    email: email,
                    uid: res.user.uid
                })
            }).catch( err => {
                alert(err)
            })
        }).catch(err => {
            alert(err.message)
        })
    }
    signIn(email,password,navigation){
        firebase.app.auth().signInWithEmailAndPassword(email,password).then( async res => {
            try{
                const jsonValue = JSON.stringify(res.user)
                await AsyncStorage.setItem("user", res.user.uid)
                navigation.navigate('bottomTab')
            }catch(e){
                console.log("no data")
            }
            // if(res.user.emailVerified){
            //     alert('email verified')
            //     navigation.navigate('bottomTab',{uid:res.user.uid})
            //     localStorage.setItem('userid', res.user.uid)
            // }
            // else {
            //     console.log('please verify your email address')
            //     res.user.sendEmailVerification().then(res => {
            //         console.log('we send you an email again, please verify your email')
            //     }).catch(err => {
            //         console.log(err.message)
            //     })
            // }
        })
    }
    resetPassword(email,navigation){
        auth.sendPasswordResetEmail(email).then(()=>{
            navigation.navigate('passwordAlert')
            console.log('password reset')
        }).catch(err=>{
            console.log(err.message)
        })
    }
    getLoggedData(id){
    console.log('id',id)
        return firebase.ref('/user')
    }
    logOut(navigation){
        firebase.app.auth().signOut().then(() => {
            console.log('logged out')
            localStorage.removeItem('userid')
            navigation.goBack('login')
        }).catch(err => {
            console.log(err.message)
        })
    }
}
export default new User()