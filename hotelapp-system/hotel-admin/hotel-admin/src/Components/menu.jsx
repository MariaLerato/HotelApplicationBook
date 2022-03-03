import React from "react";
import { useState } from "react";
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import Rooms from "./availablerooms";
import BookingHistory from "./bookings";
import CheckStatusComponent from "./CheckStatusComponent";
import Guests from "./guestlist";
import Login from "./login";
import SearchGuest from "./newroom";

import Notifications from "./notifications";
import Splash from "./splash";
import Status from "./status";

const Menu = ({props})=>{

 const [users,setUser] = useState()
 const [id,setId] = useState(null)
const [name,setName] = useState("")
 
    return(
        <>
            <BrowserRouter>
                <Routes>
                <Route exact path={'/login'} element={<Login  AddUser={setUser} />}/>
                     <Route exact path={'/newroom/:id'} element={<SearchGuest users={users} />}/>
                        <Route exact path={'/guestlist'} element={<Guests users={users} id={id} />}/>
                         <Route exact path={'/availablerooms'} element={<Rooms users={users} />}/>
                         <Route exact path={'/status'} element={<Status users={users} name={name} />}/>
                         <Route exact path={'/notifications'} element={<Notifications/>}/>
               
                    <Route exact path={'/'} element={<Splash/>}/>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Menu