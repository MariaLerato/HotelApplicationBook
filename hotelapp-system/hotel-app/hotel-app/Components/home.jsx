import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

import DatePicker from "react-native-datepicker";
import * as Yup from "yup";
import { Formik } from "formik";
import ProfilePicture from "react-native-profile-picture";
import moment from "moment";
import BackendInfo from "./service/service";
import Users from './firebase/authentication'
import firebase from './firebase/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'

const db = firebase.ref('/users')
const auth = firebase.app.auth()



const Home = ({ AddBooking, navigation,route ,id}) => {

  // const user = auth.currentUser.uid

  console.log('margidjjd');
  const [open, setOpen] = useState(true);
  const [book, setBook] = useState("");
  const [place, setPlace] = useState("");
  // const id = route.params.id
  const [rooms, setRooms] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState();
  const [checkOut, setOut] = useState();
  const [client, setClient] = useState([]);
const [uid,setId]=useState(null)
const [email,setEmail] = useState()
  const [days, setdays] = useState();
  const [name,setName] = useState()


  console.log('consoleid')


  const Validate = Yup.object({
    place: Yup.string().required("Missing"),
    rooms: Yup.number().required("Missing").max(2, "Not More Than Two Characters"),
    guests: Yup.number().required("Missing").max(2, "Too Many Guests"),
    date: Yup.date().required("Missing"),
    checkOut: Yup.date().required("Missing"),
  });
  
  
    // useEffect(()=>{
    //
    // })

  const bookHotel = () => {
    setBook([
      ...book,
      {
        id: book.length + 1,
        place: place,
        rooms: rooms,
        guests: guests,
        date: date,
        checkOut: checkOut,
      },
    ]);

  };
  const userId = firebase.app.auth().currentUser.uid 

  console.log('userId',userId);
  const retrieveData = () => {
    BackendInfo.getClient()
      .then((res) => {
        console.log(res.data);
        // setIsLoaded(true)
        setClient(res.data);
        
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const GetLogged = ()=>{
    const  id = AsyncStorage.getItem('userid')
        Users.getLoggedData(id).on('value',action=>{
            const data = action.val()
            console.log('fetchedit',id)
            setId(data.id)
            setEmail(data.email)
        })
  }

  useEffect(() => {
    retrieveData();  
    // _db.collection('/users').child(user).get('value',snap=>{
    //     setName(snap.val() && snap.val().name)
    //     console.log('name',name)
    // })
    // GetLogged()
   
    console.log('skjhiud')
  }, []);
  // console.log('useremal',email)

  const CalculateDifference = (values) => {
    var a = moment(values.date);
    var b = moment(values.checkOut);
    setdays(b.diff(a, "days"));
    console.log()
    console.log(values.date, "---", values.checkOut);
    console.log(days);
    navigation.navigate("Search", {
      location: values.place,
      roomNo: values.rooms,
      guestNo: values.guests,
      dateIn: values.date,
      dateOut: values.checkOut,
      days: b.diff(a, "days"),
      // userId:user
    });

  };
  return (
    <>
      <View style={styles.image}>
        <Image
          source={require("../assets/homeScreen.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        { 
        client.map((data) => (
        <>
       {userId === data.userId?(
            <View style={styles.header} >
            <View key={data._id}>
              <Text style={styles.headertext}>Hi {data.name}</Text>
              <Text
                style={{ color: "#6E9B93", fontSize: 14, paddingLeft: "1%" }}
              >
                Where do you want to stay?
              </Text>
            </View>
            <Image source={{ uri:data.image.localUri}} style={{ width: 60, height: 60,borderRadius:40 }}></Image>
         </View>
         

       ):(
      null
       )}
         

      
            
         
        </>
        ))}
        <Formik
          initialValues={{
            place: "",
            rooms: "",
            guests: "",
            date: "",
            checkOut: "",
          }}
          validateOnMount={true}
          validationSchema={Validate}
          onSubmit={(values) => {
            CalculateDifference(values);

          }}
        >
          {({
            errors,
            touched,
            handleBlur,
            handleSubmit,
            handleChange,
            values,
          }) => (
            <>
              <View style={styles.text}>
                <TextInput
                  value={values.place}
                  onChangeText={handleChange("place")}
                  onBlur={handleBlur("place")}
                  containerStyle={{ backgroundColor: "white", height: "15%" }}
                  inputContainerStyle={{ borderColor: "white" }}
                  placeholder={"Enter name of province"}
                  style={{ fontSize: 12, padding: "2%", margin: "2%" }}
                />
              </View>
              {errors.place && touched.place ? (
                <Text style={styles.error}>{errors.place}</Text>
              ) : null}

              <View style={{ display: "flex", flexDirection: "row" }}>
                <View>
                  <DatePicker
                    style={styles.picker}
                    date={values.date}
                    mode="date"
                    placeholder="Check in"
                    minDate={new Date()}
                    maxDate={"2022-12-30"}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: "absolute",
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                        backgroundColor: "#ffffff",
                        borderColor: "#ffffff",
                      },
                    }}
                    onDateChange={handleChange("date")}
                    // onCloseModal={CalculateDifference}
                  />
                  {errors.date && touched.date ? (
                    <Text style={styles.error}>{errors.date}</Text>
                  ) : null}
                </View>
                <View>
                  <DatePicker
                    style={styles.picker}
                    date={values.checkOut}
                    mode="date"
                    placeholder="Check out"
                    minDate={values.date}
                    maxDate={"2022-12-30"}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: "absolute",
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                        backgroundColor: "#ffffff",
                        borderColor: "#ffffff",
                      },
                    }}
                    onDateChange={handleChange("checkOut")}
                    
                  />
                  {errors.checkOut && touched.checkOut ? (
                    <Text style={styles.error}>{errors.checkOut}</Text>
                  ) : null}
                </View>
              </View>
              <View style={styles.numberText}>
                <TextInput
                  value={values.guests}
                  onChangeText={handleChange("guests")}
                  containerStyle={{ backgroundColor: "white", height: "15%" }}
                  inputContainerStyle={{ borderColor: "white" }}
                  placeholder={"How many guests ?"}
                  keyboardType={'number-pad'}
                  style={{ fontSize: 12, padding: "2%", margin: "2%" }}
                />
              </View>
              {errors.guests && touched.guests ? (
                <Text style={styles.error}>{errors.guests}</Text>
              ) : null}
              <View style={styles.numberText}>
                <TextInput
                  value={values.rooms}
                  onChangeText={handleChange("rooms")}
                  containerStyle={{ backgroundColor: "white", height: "15%" }}
                  inputContainerStyle={{ borderColor: "white" }}
                  placeholder={"How many rooms ?"}
                  style={{ fontSize: 12, padding: "2%", margin: "2%" }}
                  keyboardType={'number-pad'}
                />
              </View>

              {errors.rooms && touched.rooms ? (
                <Text style={styles.error}>{errors.rooms}</Text>
              ) : null}
              <TouchableOpacity
                style={styles.touchableOpacity}
                onPress={handleSubmit}
              >
                <Text style={styles.touchableText}>Get it</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDFFFC",
    flex: 1,
    marginTop: "-70%",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    padding: "6%",
  },
  image: {
    height: "80%",
    width: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent:'space-between'
  },
  text: {
    backgroundColor: "#FFFFFF",
    color: "#61B0A2",
    margin: "4%",
    paddingLeft: "2%",
    fontSize: 8,
  },
  numberText: {
    backgroundColor: "#FFFFFF",
    color: "#61B0A2",
    margin: "2%",
    paddingLeft: "2%",
    fontSize: 8,
    // marginTop: '-0.2%'
  },
  profile: {
    width: "20%",
    height: 69,
    marginLeft: "30%",
    borderRadius: 40,
    marginTop: "-2%",
  },
  headertext: {
    color: "#42CDB4",
    fontSize: 25,
    fontWeight: "700",
    padding: "2%",
  },
  picker: {
    width: 160,
    // backgroundColor: '#FFFFFF',
    margin: "1%",
    marginLeft: "3%",
    marginBottom: "2%",
  },
  touchableOpacity: {
    backgroundColor: "#64D3BF",
    height: 40,
    marginLeft: "60%",
    borderRadius: 40,
    marginTop: "6%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: "40%",
    borderColor: "rgba(0,0,0,.2)",
  },
  touchableText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  error: {
    color: "red",
    padding: "2%",
    fontSize: 11,
  },
});
export default Home;
