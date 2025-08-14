import React from 'react'
import logo from '../assets/MainLogo.png'
import styles from './Footer.module.css'
function Footer() {
  return (
     <footer className={styles.footer}>
        <div className={styles.logo_container}>
          <img src={logo} alt="MOOOVE" className={styles.logo} />
          <h3 className={styles.title}>MOOOVE</h3>
        </div>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/qais-alayasa-204b121a2/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/kaisalayasa/MOOOVE" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </footer>
  )
}

export default Footer