import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import './Styles.css'
import k from '../images/male.png'
import Info from './info'
import { Link } from 'react-router-dom'
import { GuestListCard } from './GuestListCard'
import BackendInfo from './service/guest'

const Guests = ({isLoaded,data}) => {
    const [adminId, setAdmin] = useState()
    const [province, setProvince] = useState()
    const [city, setCity] = useState()
    const [hotelGuest, setGuest] = useState([])
    const [id, setId] = useState()
    const [name,setName] = useState('')

    const retrieveGuest = (e) => {
        BackendInfo.getAllGuests()
            .then((res) => {
                console.log(res.data)
                setGuest(res.data.hotelGuest)
            })
    }
    console.log("name",data.name)
    useEffect(() => {
        retrieveGuest()
    }, [])


    let searchTerm = name
    return (
        <>
            <div className='link'>
                <h1>
                    Montello
                </h1>

                <div className='dropdown' style={{ height: 45, color: '#519c84', alignContent: 'center', textAlign: 'center', paddingTop: '4%' }}>
                    {data.name}
                </div>
                <h2 className='subheading'>Reservations</h2>
                <div className='reserv'>
                <p className='activity2'> Guests</p>
                <Link to='/status'>  <p> Check In</p></Link>
                </div>
                <h2>Management</h2>
                <div className='reserv'>
                    <p className='settings'> Settings </p>
                   <Link to='/availablerooms'> <p> Rooms </p></Link>
                </div>
                <div className='user'>
                    <div className='profilepicture'>
                        <img src={k} alt={'admin'} ></img>
                    </div>

                    <div className='username'>
                        <h3>Richie Milliem</h3>
                    </div>
                </div>
            </div>
            <div className='guests'>
                <div className='header'>
                    <div className='input-icons'>
                        <i className='fa fa-search fa-2x' style={{ padding: '1.8%' }}></i>
                      <input type='search' name='search' placeholder='Search Guest' className='search-input' value={name} onChange={(e)=>setName(e.target.value)} /> 
                    </div>
                    <div className='alarmNotfication'>
                        <Link to='/notifications'> <i className='fa fa-bell  ' style={{ color: '#256b5e' }} ></i></Link>
                    </div>
                </div>
                <div className='guestlist'>
                    <div className='icon-home'>
                        <i className='fa fa-home' style={{ marginTop: 4, marginLeft: -3, color: '#5bad9b' }}></i>
                        <p>/Guests</p>
                    </div>
                    <div className='hotel'>
                        <h2>Hotel Guests</h2>
                        <p>{data.name}</p>
                    </div>
                    <div className='list'>
                        {
                            hotelGuest.map((action, index) =>
                                <>
                                {data.name !== action.hotelname?(
                               null
                                ):(<>
                                <GuestListCard data={action} index={index} isLoaded={isLoaded} />
                                </>)}
                                
                                </>
                                
                            )


                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Guests