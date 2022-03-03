import React,{useState} from 'react'
import BackendInfo from './service/guest'

const RoomsComponent = ({data,users}) => {
    const [status,setStatus] = useState(data.status)
    const [roomId,setHotelId] = useState(data._id)
    const [user_id,setUserId] = useState(data.user_id)

    const date = new Date()
    
    const ChangeStatus = (e) => {
      if(status === 'Available'){
        setStatus('Available')
      }else{
       setStatus('Not Available');
      }
        console.log('changed')
        e.preventDefault()
        const Data = {status,user_id,date}
        console.log('info',Data)
        BackendInfo.updateRoom(Data)
        .then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log('room error',e)
        })
      };
    console.log('email',users)
    

  return (<>
    <div style={{display:'flex',margin:'2%',justifyContent:'space-between'}}>
    {users === data.email?(<>
    <div style={{display:'flex'}}>
         <img src ={data.bedImage.bedImage} alt={'bedroom'} style={{width:170,height:80,borderRadius:10}}/>
        <div style={{paddingLeft:'2%'}}>
         <p style={{fontSize:14,width:'150%' ,color: '#64D3BF'}}>{data.roomName}</p>
        
         <p style={{fontSize:11,width:'70%',marginTop:'-2%'}}>{data.roomDes}</p>
        <div style={{display:'flex',marginTop:'-2%'}}>
            <p style={{color: '#f26741',fontSize:11}}>Status</p>
            <p style={{width:'100%',fontSize:10}}>{data.status}</p>
        </div>
        </div>
    </div>
    <button type='submit' style={{ height: 40, width: 144 }} onClick={ChangeStatus}>Change Status</button>
    </>):(<>
  
    </>
    )}
 </div>

</>
  )
}

export default RoomsComponent