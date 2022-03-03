import React,{useState,useEffect} from 'react'
import BackendInfo from './service/guest'
import Status from './status'


const CheckStatusComponent = ({name}) => {
    const [hotels,setHotels] = useState([])
    
    const GetHotels=()=>{
        BackendInfo.getAll()
        .then((res)=>{
            console.log(res.data)
            setHotels(res.data)
        }).catch((e)=>{
            console.log('error',e)
        })
    }
    useEffect(()=>{
        GetHotels()
    },[])
  
    return (
    <div>
        {hotels.map(data=>
        <>
               <Status data={data} name={name}/>
        </>
            
            )}
    </div>
  )
}

export default CheckStatusComponent