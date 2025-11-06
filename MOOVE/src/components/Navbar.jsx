import React, { useState,useEffect } from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/MainLogo.png'
import { Link } from 'react-router-dom';
import { hasToken } from '../utils/hasToken';

function Navbar() {
    const [token,setToken] = useState(localStorage.getItem('token'));
  
    hasToken(token);

  return (
    <>
    <nav className={styles.container}>
        <div className={styles.logo_container}>
          <Link to={'/'}> <img src={logo} alt="MOOOVE" className={styles.logo} />     </Link>
             
            <h3 className={styles.title}>MOOOVE</h3>
       
        </div>

        <div className={styles.login_container}>
          {!hasToken() && (<>  <span className={styles.signin}><Link to="/login">Log In</Link></span>
            <span className={styles.signup}> <Link to="/sign-up">Sign Up</Link></span></>)
          }
          
        </div>
       
    </nav>
    
    
    </>
  )
}

export default Navbar