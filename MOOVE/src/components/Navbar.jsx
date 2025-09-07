import React from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/MainLogo.png'
function Navbar() {
  return (
    <>
    <nav className={styles.container}>
        <div className={styles.logo_container}>
            <img src={logo} alt="MOOOVE" className={styles.logo} />        
            <h3 className={styles.title}>MOOOVE</h3>

        </div>

        <div className={styles.login_container}>
            <span className={styles.signin}><a href="">Log In</a></span>
            <span className={styles.signup}> <a href="">Sign Up</a></span>
        </div>
       
    </nav>
    
    
    </>
  )
}

export default Navbar