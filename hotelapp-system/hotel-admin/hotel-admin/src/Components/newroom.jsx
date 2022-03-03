import React, { useState, useEffect, Fragment } from "react";
import "./Styles.css";
import k from "../images/male.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GuestListCard } from "./GuestListCard";
import "bootstrap";
import BackendInfo from "./service/guest";
import Guests from "./guestlist";
import HotelList from "./hotelList";
import Skeleton from '@mui/material/Skeleton';
import Login from "./login";
import { toast } from "react-toastify";

const SearchGuest = ({ users }, props) => {

  const [hotels, setGuest] = useState([]);
  const [email, setEmail] = useState("");
  const [isLoaded, setLoading] = useState(false)
  console.log("users--->", users);

  const retrieveGuest = (e) => {
    BackendInfo.getAll().then((res) => {
      console.log(res.data, 'lerato wa gafa');
      setLoading(true)
      setGuest(res.data);

    });
  };

  const DisplayResults = () => {
    if (!isLoaded) {
      return <Skeleton animation="wave" width={'100%'} height={100} />;
    }
    else {
      return (
        <div>
          {hotels.map((data) => (
            <>
              {
                users === data.email ? (
                  <Guests data={data} isLoaded={isLoaded} />
                ) : null
              }
            </>
          ))}
        </div>
      )
    }
  }
  useEffect(() => {
    retrieveGuest();
  }, []);
  const Check = (e) => {
    e.preventDefault();
    setEmail(users);
    console.log("matched");
  };
  return (
    <div className="hotels-container" style={{ backgroundColor: "#f2f9f8", flex: 1, height: '100vh' }}>
     <DisplayResults/>
    </div>
  );
};
export default SearchGuest;

