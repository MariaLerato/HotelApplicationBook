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

const Home = ({ AddBooking, navigation }) => {
  const [open, setOpen] = useState(true);
  const [book, setBook] = useState("");
  const [place, setPlace] = useState("");
  const [rooms, setRooms] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState();
  const [checkOut, setOut] = useState();
  const [client, setClient] = useState([]);

  const [days, setdays] = useState("");

  const Validate = Yup.object({
    place: Yup.string().required("Missing"),
    rooms: Yup.number().required("Missing").max(2, "Not More Than Two Characters"),
    guests: Yup.number().required("Missing").max(2, "Too Many Guests"),
    date: Yup.date().required("Missing"),
    checkOut: Yup.date().required("Missing"),
  });
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

    CalculateDifference();
  };
  const retrieveData = () => {
    BackendInfo.getClient()
      .then((res) => {
        console.log(res.data);
        // setIsLoaded(true)
        setClient(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveData();
  
  }, []);

  const CalculateDifference = (date1, date2) => {
    var a = moment(date1);
    var b = moment(date2);
    setdays(a.diff(b, "days"));
    console.log(date1, "---", date2);
    console.log(a.diff(b, "days"));
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


        {client.map((data) => (
        <>
              <View style={styles.header} key={data._id}>
            <View>
              <Text style={styles.headertext}>Hi {data.name}</Text>
              <Text
                style={{ color: "#6E9B93", fontSize: 14, paddingLeft: "1%" }}
              >
                Where do you want to stay?
              </Text>
            </View>
            <Image source={{ uri:data.image.localUri}} style={{ width: 60, height: 60,borderRadius:40 }}></Image>
          </View> 
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
            CalculateDifference(values.checkOut, values.date);
            navigation.navigate("Search", {
              location: values.place,
              roomNo: values.rooms,
              guestNo: values.guests,
              dateIn: values.date,
              dateOut: values.checkOut,
              days: days,
            });
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
                  style={{ fontSize: 12, padding: "1%" }}
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
                    minDate={"2021-12-20"}
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
                    onCloseModal={CalculateDifference}
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
                    minDate={"2021-12-20"}
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
                    onCloseModal={CalculateDifference}
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
