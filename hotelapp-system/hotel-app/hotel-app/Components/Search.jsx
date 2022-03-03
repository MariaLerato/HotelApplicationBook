import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import SearchAlt from "./searchAlt";
import ProfilePicture from "react-native-profile-picture";
import SkeletonContent from "react-native-skeleton-content";

import BackendInfo from "./service/service";

const Search = ({ navigation, route }) => {
  const [hotels, setHotels] = useState([]);
  const [client, setClient] = useState([]);
  const [isLoading, setIsLoaded] = useState(true);
  const { location, roomNo, guestNo, dateIn, dateOut, days } = route.params;

  const INTERVAL_Refresh = 3000;
  const PlaceHolder = () => {
    return (
      <SkeletonContent
        containerStyle={{ width: 200, height: 200, flexDirection: "row" }}
        isLoading={isLoading}
        // duration={120}
        // animationType={"pulse"}
        animationDirection={"horizontalLeft"}
        boneColor={"#E1E9EE"}
        layout={[
          { key: "1", width: 165, height: 170, marginBottom: 1 },
          { key: "2", width: 165, height: 170, marginBottom: 1 },
        ]}
      ></SkeletonContent>
    );
  };
  console.log("diff", days);
  const retrieveData = () => {
    BackendInfo.getAll()
      .then((res) => {
        console.log(res.data);
        setIsLoaded(true);
        setHotels(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getClient = () => {
    BackendInfo.getClient()
      .then((res) => {
        console.log(res.data);
        setIsLoaded(true);
        setClient(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveData();
    getClient();
  }, []);

  let searchString = location;
  const searchData = hotels.filter((data) =>
    data.province.toUpperCase().includes(searchString)
  );
  const DisplayHotels = () => {
    return (
        <View
     style={{flexDirection:'row',paddingLeft:'6%'}}
        >
          {/* {!isLoading?(<>
          <Text>Please Wait While We Sync The </Text>
          </>)} */}
          {searchData.map((data) => (
            <View style={{ padding: "2%" }} key={data._id}>
              <ImageBackground
                source={{ uri: data.image.image }}
                style={{
                  width: 165,
                  height: 170,
                  overflow: "hidden",
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "white",
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Pretoria", {
                      roomNo: roomNo,
                      name: data.name,
                      hotelpic: data.image.image,
                      des: data.text,
                      place: data.province,
                      dateIn: dateIn,
                      dateOut: dateOut,
                      guestNo: guestNo,
                      location: location,
                      email: data.email,
                      city: data.city,
                      days: days,
                    })
                  }
                  style={styles.hotelname}
                >
                  <Text style={styles.loca}>{data.city}</Text>
                  <Text style={styles.number}>{data.city.length} Hotels</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          ))}
        </View>
    
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.HeaderContainer}>
        <View>
          {client.map((action) => (
            <View key={action._id}>
              <View style={styles.ImageContainer}>
                <ProfilePicture
                  isPicture={true}
                  requirePicture={{ uri: action.image.localUri }}
                  shape="circle"
                  pictureResizeMode="cover"
                  pictureStyle={styles.Image}
                />

                <View style={styles.name}>
                  <Text style={styles.profilename}>
                    {action.name} {action.surname}
                  </Text>
                  <Text style={styles.find}>Find The Best Hotel</Text>
                </View>
                <TouchableOpacity
                  style={styles.alarm}
                  onPress={() => navigation.navigate("notification")}
                >
                  <Icon
                    name={"bell"}
                    type="font-awesome"
                    size={18}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.destinationContainer}>
          <View style={styles.padding}>
            <View>
              <Text style={styles.textDestination}>Destination</Text>
              <Text style={styles.input}>{location}</Text>
            </View>
            <View style={styles.dateContainer}>
              <View>
                <Text style={styles.title}>Date</Text>
                <Text style={styles.input}>
                  {dateIn}/ {dateOut}
                </Text>
              </View>
              <View>
                <Text style={styles.titles}>Rooms</Text>
                <Text style={styles.rooms}>
                  {guestNo} Guests, {roomNo} Rooms
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={styles.touchableText}>Available Hotels</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ marginTop: "-3%" }}>
            <View style={styles.map}>
              <Text style={styles.location}>By Location</Text>
            </View>
            <View style={{ marginTop: "-2%"  ,
                  height: 190,}}>
             {
               !isLoading?(<>
                <Text>Loading Available Hotels</Text>
               </>):(<>
                    <DisplayHotels/>
               </>)
}
            </View>
          </View>
          <View>
            <Text style={styles.neartext}>Best Rated</Text>
            {SearchAlt.nearby
              .filter((data) => data.province === location)
              .map((action) => (
                <View key={action.id} style={styles.near}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("hotelrooms")}
                  >
                    <Image
                      source={action.image}
                      style={{
                        width: 65,
                        height: 65,
                        borderRadius: 5,
                        marginTop: "6%",
                      }}
                    />
                  </TouchableOpacity>
                  <View style={{ paddingLeft: "2%" }}>
                    <Text style={styles.hoteltext}>{action.hotelname}</Text>
                    <Text style={styles.locationName}>{action.location}</Text>
                    <View style={styles.nearContainer}>
                      <Text style={styles.price}>
                        {action.price}/{action.state}
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <Icon
                          name={"star"}
                          type={"font-awesome"}
                          color={"#FAA455"}
                          size={18}
                        />
                        <Text style={styles.number}>4.9</Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  HeaderContainer: {
    height: "40%",
    backgroundColor: "#61B0A2",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  Image: {
    height: 75,
    width: 75,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
    marginLeft: "4%",
  },
  ImageContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: "-27%",
  },
  name: {
    color: "white",
    marginTop: "3%",
    padding: "2%",
  },
  profilename: {
    color: "white",
    fontSize: 16,
    marginTop: "-6%",
  },
  find: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  alarm: {
    marginTop: "5%",
    marginLeft: "18%",
  },
  container: {
    backgroundColor: "#FBF4F4",
    flex: 1,
  },
  destinationContainer: {
    marginTop: "-38%",
    backgroundColor: "white",
    margin: "5%",
    borderRadius: 10,
  },
  padding: {
    padding: "3%",
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textDestination: {
    color: "#1C5248",
    fontSize: 24,
    fontWeight: "700",
  },
  input: {
    color: "#B2B2B2",
  },
  rooms: {
    color: "#B2B2B2",
    // alignItems: "flex-end",
    // paddingLeft: "19%",
  },

  titles: {
    // paddingLeft: "30%",
    color: "#1C5248",
    fontWeight: "700",
  },
  title: {
    color: "#1C5248",
    fontWeight: "700",
  },

  touchableOpacity: {
    backgroundColor: "#80D8C8",
    height: 60,
    marginTop: "2%",
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
    width: "100%",
    borderColor: "rgba(0,0,0,.2)",
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
  touchableText: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  map: {
    display: "flex",
    flexDirection: "row",
    padding: "1%",
    justifyContent: "space-between",
  },
  location: {
    color: "#1C5248",
    fontSize: 22,
    fontWeight: "700",
    fontFamily: "Roboto",
    paddingLeft: "2%",
  },
  view: {
    color: "#B2B2B2",
    fontSize: 20,
    fontWeight: "600",
    marginRight: "4%",
  },
  picContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "6%",
  },
  hotelname: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: "auto",
    height: "40%",
    margin: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
  loca: {
    color: "#1C5248",
    fontWeight: "600",
    fontSize: 20,
  },
  number: {
    color: "#B2B2B2",
    fontSize: 15,
    fontWeight: "700",
  },
  near: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    margin: "2%",
    borderRadius: 10,
    padding: "2%",
    paddingLeft: "2%",
    marginTop: "auto",
  },
  neartext: {
    color: "#1C5248",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto",
    paddingLeft: "2%",
    marginTop: "3%",
  },
  hoteltext: {
    color: "#1C5248",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  locationName: {
    color: "#B2B2B2",
    fontSize: 18,
    fontWeight: "700",
    paddingLeft: "3%",
  },
  price: {
    color: "#1C5248",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  nearContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "3%",
  },
});
export default Search;
