import React from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import toastr from 'toastr'
import Skeleton from '@mui/material/Skeleton';

const HotelList = ({data,Check,users,loading}) => {
 
    toast.configure()
    console.log(loading,'loading')
    const navigate = useNavigate()
    console.log('user',users)
    const Navigating = (e)=>{
        if(data.email === users ){
            navigate('/guestlist')
            console.log('email',data.email)
        }else{
            toast(`User Not Authenticated To Access ${data.name} Information. Please Check Credientials `)
        }
    }
   return (
    <div>  
        <div class="card" style={{width: '20rem',margin:'2%'}}>
      
            <img src={!loading ?(
                 <Skeleton animation="wave" width={'100%'} height={100} />
            ):data.image.image}  style={{width:'100%',height:200}}  class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{!loading? (<Skeleton
              animation="wave"
              height={10}
              width="100%"
              style={{ marginBottom: 6 }}
            />):data.name}</h5>
              <p class="card-text">{!loading?(
                  <Skeleton animation="wave" height={20} width="100%" />
              ):data.city}</p>
              <button  className="btn btn-primary" users={data.name} onClick={Navigating}>Select Your Hotel</button>
            </div>
        </div>
    </div>
  )
}

export default HotelList