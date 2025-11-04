import React, { useState } from 'react'
import styles from './SignUp.module.css'
import axios from 'axios'
import logo from '../../assets/MainLogo.png'
import { useNavigate } from 'react-router-dom'




function SignUp() {
    const [user,setUser] = useState('')
    const [email,setemail] = useState('')
    const [password,setPassword] = useState('')

    const navigate =  useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const userData = {email:email ,password: password}
        console.log(userData,'this is data')
        try{
            const res = await axios.post('/api/auth/signup',userData);
            console.log(res.data);
            console.log(res.data.message)
            navigate('/login');
           
        }catch(err){
            console.error(err.response.data.error)
        }

    }

 
  return (
    <>
    <div className={styles.layout}>
        <div className={styles.main_container}>
            <div className={styles.login_container}>
                <div className={styles.welcome}>
                    <h1>Welcome To Moove</h1>
                <h3>Please enter your details to create an account</h3>
            

                </div>
                
            <form onSubmit={handleSubmit} >
                <div className={styles.input_field}>
                    <label htmlFor="email" >Email</label>
                    <input type="text" onChange={(e)=>setemail(e.target.value)} placeholder='real@earlhm.edu' />

                </div>

                <div  className={styles.input_field}>
                     <label htmlFor="password" >Password</label>
                    <input type="password"  onChange={(e)=> setPassword(e.target.value)} placeholder='real@earlhm.edu' />

                </div>

              

                <div className={styles.submit}> 
                     <button> Sign up</button>
                </div>
               
            </form>

        </div>
        
        <div className={styles.img_container}>
            <img src={logo} alt="" />



        </div>
        

        </div>
       
            
            










        
    </div>
    
    </>
  )
}

export default SignUp