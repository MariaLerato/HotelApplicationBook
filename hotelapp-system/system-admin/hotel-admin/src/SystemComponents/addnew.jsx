import React,{useState} from "react";
import l from '../images/maria.png'
import { Link } from "react-router-dom";

import  Modal  from "@material-ui/core/Modal";

const AddNew = () =>{
    const [open,setOpen] = useState(true)
    const close= ()=>{
        setOpen(false)
    }
    const handleOpen = ()=>{
        setOpen(true)
    }
    return(
        <>
         <div className='GuestContainer'>
                <div className='link'>
                    <h1>
                        Montello
                    </h1>
                    <div className='systemuser'>
                        <div className='profilepicture'>
                            <img src={l} alt={'admin'} ></img>
                        </div>
                        <div className='systemusername'>
                            <h3>Maria Lerato</h3>
                            <p>App Admin</p>
                        </div>   
                    </div>
                  
                    <h2 className='subheading'>Register Hotels</h2>
                    <h2>System Maintenance</h2>
                    <div className='logout'>
                        <i  className='fa fa-sign-out fa-2x' ></i>
                        <h3>Log Out</h3>
                    </div>
                </div>
                <div>
                    <button type='button' onClick={handleOpen}>Open Modal</button>
                    <Modal
                     open={open}
                     onClose={close}
                     style={{
                        position: 'absolute',
                        border: '2px solid #000',
                        backgroundColor: 'gray',
                        boxShadow: '2px solid black',
                        height:80,
                        width: 240,
                        margin: 'auto'
                      }}
                    >
                      <h2>How are you?</h2>
                    </Modal>
                </div>
            </div>
        </>
    )
}
export default AddNew

