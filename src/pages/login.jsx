import { login } from '../services'
import {useEffect, useState }from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {

  const navigate = useNavigate()
  
     useEffect (()=>{
     const token = localStorage.getItem('token')
     if(token){
      navigate('home')
     }
  },[])
    const [loginformData ,setLoginformData]=useState({
        email:"",
        password:"",
      })
    
    const handlelogin = async (e) => {
        e.preventDefault();
        try {
          const res = await login(loginformData);
          if (res && res.status === 200) {
            const data = await res.json()
            console.log(data)
            localStorage.setItem('token',data.token)
            alert("logged in succesfully")
            navigate('/home')
          } else {
            console.log(res);
            alert('Error');
          }
        } catch (error) {
          console.error('Error during login:', error);
          alert('An error occurred during login');
        }
      }
       return (
             <form OnSubmit={handlelogin}>
             <input type="email" onChange = {(e)=> setLoginformData({... loginformData,[e.target.name] :e.target.value})} value={loginformData.email}name = "email" placeholder = "enter email"/>
             <input type="password" onChange ={(e)=> setLoginformData({... loginformData,[e.target.name] :e.target.value})}value={loginformData.password}name = "password" placeholder = "enter password"/>
             <button type='submit'>submit</button>
            </form>
             )
     }

     //if user is already logedin they should automatically move to the home page they should  not have login to asap if there login is still fresh