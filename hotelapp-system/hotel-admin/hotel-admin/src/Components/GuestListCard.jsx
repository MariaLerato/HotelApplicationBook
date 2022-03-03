import React, { useState } from "react";
import "./Styles.css";
import Skeleton from '@mui/material/Skeleton';

export const GuestListCard = ({ data, index,isLoaded}) => {
  const [show, setShow] = useState(false);

const handleClick=()=>{
    setShow(!show)
}
const ShowSkeleton = ()=>{
  if(data){
    return<></>
  }
}

  return (
    <div className="cardContainer" key={data._id}>
      <div  className="cardRow">
        {data?(
          <div>
          {data.name}
          <p>{data.location}</p>
        </div>
        ):(
          <Skeleton variant ="text"/>
        )}
        <>
          <button type="submit"  onClick={()=>handleClick() }>
            Booking
          </button>
        </>
      </div>
      {show && (
        <div className="dropThingie" >
            <div className="roomLine">
                <h5>Room</h5>
                <p>{data.Room} </p>
              
            </div>
            <div className="roomLine">
            <h5>Check in</h5>
           <p> {data.dateIn}
               </p> 
            </div>
            <div className="roomLine">
            <h5>Check Out</h5>
            <p>{data.dateOut}</p>   
            </div>
            <div className="roomLine">
            <h5>Status</h5>
            <p className="status" style={{color: '#f26741'}}> {data.status}</p> 
            </div>
            <div className="roomLine">
            <h5>Total</h5>
            <p> R{data.roomPrice}</p> 
            </div>        
            </div>
      )}
    </div>
  );
};


