import React from 'react'
import {Link} from 'react-router-dom'
import m from '../images/SplashImage.png'
import './Styles.css'

const SystemSplash = ()=>{
    
    return(
        <div className='SplashContainer'>
            <div className="Splash">
                <div className='image'>
                    <img src={m} alt={'splash'} width={320} height={280} />
                </div>
                <div className='right'>
                    <h1>Montello Hotel App </h1>
                    <i>Comfort Offered At Minimum Rate</i>
                </div>
                <div className='button'>
                <Link to={'/signin'}>   <button type='submit'  className={'submit'} >Get Started</button></Link>
            </div>
            </div>
           
        </div>
    )
}
export default SystemSplash