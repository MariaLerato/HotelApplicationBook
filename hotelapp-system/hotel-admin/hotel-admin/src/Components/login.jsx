import React from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'
import './Styles.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import BackendInfo from './service/guest'
import { useState } from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'

const Login = ({AddUser})=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [hotelId,setHotelId] = useState([])
    const [userId,setId] = useState()
    const navigate = useNavigate()
    
    async  function SubmitForm(e){
        e.preventDefault()
        const logUser = {email,password,hotelId,userId}
        console.log(logUser)
       BackendInfo.logUser(logUser)
        .then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
            console.log(e)
        })  
        AddUser(email)
        console.log('user')
        navigate(`/newroom/${email}`) 
    }
    
    
    return(
        <div className='loginContainer'>
            <div className='link'>
                <h1>
                    Montello
                </h1>

                <div className='dropdown' style={{height:45,color:'#519c84',alignContent:'center',textAlign:'center',paddingTop:'4%'}}>
                    Hotel Name
                </div>
                <h2>Reservations</h2>
                <h2>Management</h2>
                    
                    <div className='user'>
                        <div className='profile'>
                            <i className='fa fa-user fa-3x' ></i>
                        </div>

                        <div className='username'>
                            <h3>Admin Name</h3>
                        </div>
                    </div>
            </div>
            <div className='content'>
                <div className='heading'>
                    <h1>Welcome Admin</h1>
                </div>
            
                    <form className='log' onSubmit={SubmitForm} style={{justifyContent:'center',alignContent:'center',marginTop:8,marginLeft:'38%'}}>
                    <h2>E-mail</h2>
                   <div className='input-icons'>
                   <i className='fa fa-envelope fa-2x'></i>
                    <input type='email' placeholder='Hotel Email Address'
                    className='input-field' value={email} onChange={(e)=>setEmail(e.target.value)} 
                    />
                
                   </div>
                    <h2>Password</h2>
                    <div className='input-icons'>
                   <i className='fa fa-lock fa-2x'></i>
                    <input type='password' placeholder='Ref. Number' value={password} onChange={(e)=>setPassword(e.target.value)}  
                    className='input-field'
                    />
                   
                    <i className='fa fa-eye fa-2x' style={{marginLeft:'-3%'}}></i>
                   </div>
             <button type='submit' name='submit' onClick={SubmitForm}  className='logbutton'>Submit</button> 
                </form>
               
            </div>
        </div>
    )
}
export default Login

