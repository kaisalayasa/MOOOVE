import React, { useState } from 'react'
import styles from './LoginPage.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'





function LoginPage() {
    const navigate = useNavigate();
    const [user,setUser] = useState('')
    const [email,setemail] = useState('')
    const [password,setPassword] = useState('')

  

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const userData = {email : email, password: password};
        try{
            const res = await axios.post('/api/auth/login', userData)
            console.log("user logged in")
            console.log(res.data)
            localStorage.setItem('token', res.data.token);

            navigate('/avaliable-listings-page')

        }catch(err){
            console.error(err.response);

        }

        
    }
  return (
    <>
    <div className={styles.layout}>
        <div className={styles.main_container}>
            <div className={styles.login_container}>
                <div className={styles.welcome}>
                    <h1>Welcome Back</h1>
                <h3>Please Enter your details to sign in</h3>
            

                </div>
                
            <form onSubmit={handleSubmit}>
                <div className={styles.input_field}>
                    <label htmlFor="email" >Email</label>
                    <input type="text" onChange={(e)=>setemail(e.target.value)} placeholder='real@earlhm.edu' />

                </div>

                <div  className={styles.input_field}>
                     <label htmlFor="password" >Password</label>
                    <input type="password"  onChange={(e)=> setPassword(e.target.value)} placeholder='real@earlhm.edu' />

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