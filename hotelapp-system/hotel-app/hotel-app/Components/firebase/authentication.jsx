import firebase from './firebase'

const db = firebase.ref('/users')
const auth = firebase.app.auth()

class User{
     signUp(email,password,navigation) {
        return firebase.app.auth().createUserWithEmailAndPassword(email,password).then(res => {
         res.user.sendEmailVerification()
            .then(action => {
               navigation.navigate('passwordAlert')
                db.child(res.user.uid)
                .set({
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
        firebase.app.auth().signInWithEmailAndPassword(email,password).then(res => {
            if(res.user.emailVerified){
                alert('email verified')
                navigation.navigate('bottomTab')
                localStorage.setItem('userid', res.user.uid)
            }
            else {
                console.log('please verify your email address')
                res.user.sendEmailVerification().then(res => {
                    console.log('we send you an email again, please verify your email')
                }).catch(err => {
                    console.log(err.message)
                })
            }
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
        return firebase.ref(`/user/${id}`)
    }
    logOut(navigation){
        firebase.app.auth().signOut().then(() => {
            console.log('logged out')
            localStorage.removeItem('userid')
            navigation.goBack()
        }).catch(err => {
            console.log(err.message)
        })
    }
}
export default new User()