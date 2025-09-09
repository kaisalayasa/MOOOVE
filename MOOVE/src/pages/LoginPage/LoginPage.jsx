import React, { useState } from 'react'
import styles from './LoginPage.module.css'


function LoginPage() {
    const [user,setUser] = useState('')
    const [email,setemail] = useState('')
    const [password,setPassword] = useState('')
  return (
    <>
    <div className={styles.layout}>
        <div className={styles.main_container}>
            <div className={styles.login_container}>
                <div className={styles.welcome}>
                    <h1>Welcome Back</h1>
                <h3>Please Enter your details to sign in</h3>
            

                </div>
                
            <form action="">
                <div className={styles.input_field}>
                    <label htmlFor="email" >Email</label>
                    <input type="text" placeholder='real@earlhm.edu' />

                </div>

                <div  className={styles.input_field}>
                     <label htmlFor="password" >Password</label>
                    <input type="password" placeholder='real@earlhm.edu' />

                </div>

              

                <div className={styles.submit}> 
                     <button> Sign in</button>
                </div>
               
            </form>

        </div>
        
        <div className={styles.img_container}>
            <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />



        </div>
        

        </div>
       
            
            










        
    </div>
    
    </>
  )
}

export default LoginPage