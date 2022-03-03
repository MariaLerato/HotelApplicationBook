import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from "react-native"

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.WelcomeContainer}>
            <Image style={styles.welcomeImage} source={require('../../assets/welcomeImage.png')} />
            </View>
            <View style={styles.second}>
               
                <Text style={styles.welcomeText}>Efficient,Elegant & Best Prices</Text>
                <Text style={styles.subtext}>Control Where You Spend Your Holiday</Text>
                <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate('SignIn')}><Text style={styles.touchableText}>Get Started</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    WelcomeContainer: {
        height:'50%',
        backgroundColor: '#61B0A2'
    },
    welcomeImage: {
        height: 370,
       marginLeft:'15%',
        width: 270,
        justifyContent:'center',
        marginTop:'8%'
    },
    second: {
        alignItems: 'center',
        marginTop:'15%'
    },
    welcomeText: {
        paddingTop: '2%',
        color: '#1C5248',
        fontWeight: '700',
        fontSize: 28,
        textAlign: "center",
        padding: '3%'
    },
    subtext: {
        color: '#1C5248',
        fontSize: 22,
        textAlign: "center",
        padding: '2%',
        marginTop: '-4%'
    },
    touchableOpacity: {
        backgroundColor: '#06AC8E',
        height: 68,
        marginTop: '6%',
        borderRadius: 10,
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
        width: '90%',
        borderColor: 'rgba(0,0,0,.2)',
    },
    touchableText: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: '700'
    }

})
export default WelcomeScreen