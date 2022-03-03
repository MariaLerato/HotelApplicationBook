import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/SplashImage.png'
import './Styles.css'

const Splash = ()=>{
    
    return(
        <div className='SplashContainer'>
            <div className="Splash">
                <div className='image'>
                    <img src={Logo} alt={'splash'} width={320} height={280} />
                </div>
                <div className='right'>
                    <h1>Montello Hotel App </h1>
                    <i>Comfort Offered At Minimum Rate</i>
                </div>
                <div className='button'>
                <Link to={'/login'}>   <button type='submit'  className={'submit'} >Get Started</button></Link>
            </div>
            </div>
           
        </div>
    )
}
export default Splash