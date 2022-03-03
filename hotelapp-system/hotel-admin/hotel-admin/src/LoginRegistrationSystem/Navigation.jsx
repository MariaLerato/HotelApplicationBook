import React, { useState } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Homepage from './homepage'
import Login from './login'
import Register from './register'

const Navigation = () => {
    const [user,setLoginUser] = useState({

    })
  return (

    <div>
        <BrowserRouter>
        <Routes>
                    <Route exact path={'/'} element={<>
                    {
                        user && user._id ? <Homepage/>:<Login/>
                    }<Homepage/>
                    </>
                    }/>
                    <Route exact path={'/login'} element={<Login setLoginUser={setLoginUser}/>}/>
                    <Route exact path={'/register'} element={<Register/>}/>
                    
                </Routes>
        </BrowserRouter>
    </div>
  )


}
export default Navigation