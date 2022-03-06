import React, { useState, useEffect } from 'react';
import './Styles.css'
import profilepicture from '../images/male.png'
import { Link } from 'react-router-dom';
import Modal from "@material-ui/core/Modal";
import BackendInfo from './service/guest'
import FileBase64 from 'react-file-base64'
import RoomsComponent from './roomsComponent';

const Rooms = ({users}) => {
    console.log('user',users)
    const [open, setOpen] = useState(false)
    const [roomType, setRoomType] = useState(null)
    const [other, setOther] = useState()
    const [roomName, setName] = useState()
    const [bedImage,setBedImage] = useState()
    const [lounge,setLounge] = useState()
    const [hotelId,setHotelId] = useState()
    const [roomDes, setText] = useState()
    const [roomPrice, setPrice] = useState()
    const [hotelrooms,setGuestList] = useState([])
    const [roomId,setId] = useState()
    const [images,setImages] = useState([])
    const [city,setCity] = useState()

    const retrieveGuest = (e)=>{
        
        BackendInfo.getAllRooms()
        .then((res)=>{
            console.log(res.data)
            setGuestList(res.data.hotelrooms)
        }).catch((e)=>{
            console.log('errorndjkfsd',e)
        })
    }
    const retrieveRoom = (e)=>{

        BackendInfo.getAllImages()
        .then((res)=>{
            console.log(res.data)
            setImages(res.data.hotelrooms)
        })
    }
    useEffect(()=>{
        retrieveGuest()
    
    },[])
 
    const Unavailable = (e)=>{
        console.log('roomId')
        BackendInfo.update(e, {status: true}).then(res=>{
            console.log('done')
        }).catch(err => console.log(err))
    }

    const handleOpen = () => {
        setOpen(!open)
    }
    const close = ()=>{
        setOpen(false)
    }  
 
    async  function addRoom(e){
        e.preventDefault()
        const newRoom = {roomName,roomDes,roomId,roomPrice,hotelId,roomType,bedImage,lounge,other}
        console.log(newRoom)
       BackendInfo.addRoom(newRoom)
        .then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })   
    }
    const deleteHotelRoom = ()=>{
        BackendInfo.deleteRoom(roomId)
        .then((res)=>{
            console.log(res.data)
        })
    }
       return (
        <>
            <div className='GuestContainer'>
                <div className='link'>
                    <h1>
                        Montello
                    </h1>

                    <div className='dropdown' style={{ height: 45, color: '#519c84', alignContent: 'center', textAlign: 'center', paddingTop: '4%' }}>
                       {users}
                    </div>
                    <h2 className='subheading'>Reservations</h2>
                    <div className='reserv'>
                    <Link to='/newroom'> <p> Guests</p></Link>
                    <Link to='/status'>  <p> Check In</p></Link>
                    </div>
                    <h2>Management</h2>
                    <div className='reserv'>
                    <p> Settings </p>
                    <p style={{ color: '#64D3BF' }}> Rooms </p>
                    </div>
                    <div className='user'>
                        <div className='profilepicture'>
                            <img src={profilepicture} alt={'admin'} ></img>
                        </div>

                        <div className='username'>
                            <h3>Richie Milliem</h3>
                        </div>
                    </div>
                </div>
                <div className='guests'>
                    <div className='header'>
                        <div className='input-icons'>
                            <i className='fa fa-search fa-2x' style={{ padding: '2.5%' }}></i>
                            <input type='search' name='search' placeholder='Search Rooms' className='search-input' />
                        </div>
                        <div className='alarm'>
                            <button type='submit' onClick={handleOpen}>Add New Room</button>
                        </div>
                    </div>
                   {/* Executive Suite :The sky’s the limit in these ultra-high hotel rooms around the world, which offer luxurious interiors paired with panoramic views to make for */}
                    {/* Room-only hotel room :overnight accommodations include only a room: Dorm-style hotels, some inns, bed and breakfasts, and some hostels",*/}
                   {/* Standard Hotel room : offer a room and separate bathroom area for travelers to book nightly */}
                   {/* Minimalist hotel room:Designed with tech-savvy, budget-conscious travelers in mind, these hotels put more focus on the property’s communal spaces: The lobby, breakfast area, and outdoor areas",*/}
                   {/* Deluxe hotel room :include patios, balconies, a private terrace, or other additions that set them apart from standard room types */}
                    {/* Hotel Suite :Suites also tend to include a separate kitchen area with appliances, dining space, and the ability to store food. Not all suites include full kitchens, however, many only include kitchenettes — a scaled-down functional kitchen space */}
                   <div className='guestlist'>
                        <div className='icon-home'>
                            <i className='fa fa-bed' style={{ marginTop: 4, marginLeft: -3, color: '#5bad9b' }}></i>
                            <p>/Rooms</p>
                        </div>
                        <div className='hotel'>
                            <h2>Hotel Rooms</h2>
                           
                        </div>
                        <div className='list'>

                                        {
                                            hotelrooms.map(data =>
                                           <RoomsComponent data={data} users={users}/>
                                            )   
                                               

                                        }

                               {/* <Link to ={'/newroom' + data._id}> */}
                                   {/* <img src={data.image.image} alt={data.name} style={{width:144,height:94,borderRadius:10}}/></Link>       */}
                                     
                                      
                          
                                
                            

                        </div>

                    </div>
                    <div className='Container'>
                        <Modal
                            open={open}
                            onClose={close}
                            style={{
                                position: 'absolute',
                                width: '60%',
                                padding:'2%',
                              
                                margin: 'auto',
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div className='ModalContainer'>
                                <form className='Add' onSubmit={addRoom}>
                                    <h2 style={{ marginLeft: '20%' }}>Add Hotel Room</h2>
                                    <div className='hotel-input-icons'>
                                        <i className='fa fa-bed fa-2x'></i>
                                        <input type='text' placeholder='Type Of Room'
                                            className='input-field'
                                            value={roomName}
                                            onChange={(e)=>setName(e.target.value)}
                                        />

                                        <i className='fa fa-info-circle fa-2x'></i>
                                         <input type='text' placeholder='About Room'
                                            className='input-field'
                                            value={roomDes}
                                            onChange={(e)=>setText(e.target.value)}
                                        />
                                           <i className='fa fa-dollar fa-2x'></i>
                                         <input type='text' placeholder='Room Price'
                                            className='input-field'
                                            value={roomPrice}
                                            onChange={(e)=>setPrice(e.target.value)}
                                        /> <i class="fa fa-id-card fa-2x"></i>
                                         <input type='text' placeholder='Room No.'
                                            className='input-field'
                                            value={roomId}
                                            onChange={(e)=>setId(e.target.value)}
                                        />
                                        <i class="fa fa-envelope fa-2x"></i>
                                          <input type='text' placeholder='Email Address'
                                            className='input-field'
                                            value={users}
                                        />
                                        <FileBase64
                                        type="file"
                                        multiple={false}
                                        onDone={({base64})=>setBedImage({bedImage:base64})}
                                        />
                                         <FileBase64
                                        type="file"
                                        multiple={false}
                                        onDone={({base64})=>setLounge({lounge:base64})}
                                        />
                                         <FileBase64
                                        type="file"
                                        multiple={false}
                                        onDone={({base64})=>setOther({other:base64})}
                                        />
                                    </div>
                                       

                                    <button type='button' className='addnew' style={{ width: 170, marginLeft: '55%', marginTop: '2%' }} onClick={addRoom} >Add New Room</button>
                                </form>
                          
                            </div>
                    
                </Modal>
            </div>
        </div>
        </div >
    </>
    )
}
export default Rooms
