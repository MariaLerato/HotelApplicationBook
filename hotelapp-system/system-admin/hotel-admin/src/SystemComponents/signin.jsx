import React from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import Dropdown from 'react-bootstrap/Dropdown'
import l from '../images/maria.png'

const SystemLogin = ()=>{
    return(
       <div>
           <div className='loginContainer'>
            <div className='link'>
                <h1>
                    Montello
                </h1>

                <div className='dropdown' style={{height:45,color:'#519c84',alignContent:'center',textAlign:'center',paddingTop:'4%'}}>
                    Hotel Name
                </div>
                <h2 className='subheading'>Register Hotels</h2>
                    <h2>System Maintenance</h2>
                    
                <div className='user'>
                        <div className='profilepicture'>
                            <img src={l} alt={'admin'} ></img>
                        </div>
                        <div className='username'>
                          <h3>System Admin</h3>
                        </div>
                    </div>
            </div>
            <div className='content' style={{flex:1}}>
                <div className='heading'>
                    <h1>Welcome Admin</h1>
                </div>
                <div className='log' style={{justifyContent:'center',alignContent:'center',marginTop:8,marginLeft:'38%'}}>
                    <h2>E-mail</h2>
                   <div className='input-icons'>
                   <i className='fa fa-envelope fa-2x'></i>
                    <input type='email' placeholder='Hotel Email Address'
                    className='input-field'
                    />
                   </div>
                    <h2>Password</h2>
                    <div className='input-icons'>
                   <i className='fa fa-lock fa-2x'></i>
                    <input type='password' placeholder='Ref. Number'
                    className='input-field'
                    />
                    <i className='fa fa-eye fa-2x' style={{marginLeft:'-3%'}}></i>
                   </div>
                  <Link to='/registeredhotels'>  <button type='submit' name='submit' className='logbutton'>Submit</button></Link>
                </div>
            </div>
        </div>
       </div>
    )
}
export default SystemLogin

