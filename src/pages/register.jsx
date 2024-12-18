import { register } from '../services'
import {useState }from 'react'
export default function Register() {
    
    const [formData,setformData]=useState({
        name:"",
        phone:"",
        email:"",
        password:"",
  })
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          const res = await register(formData);
          if (res && res.status === 200) {
            alert('Register successfully');
          } else {
            console.log(res);
            alert('Error');
          }
        } catch (error) {
          console.error('Error during registration:', error);
          alert('An error occurred during registration');
        }
      };
          return (
           <form onSubmit={handleRegister}>
            <input type="text" onChange = {(e)=> setformData({... formData,[e.target.name] :e.target.value})} value={formData.name} name="name" placeholder="enter name"/>
            <input type="text" onChange = {(e)=> setformData({... formData,[e.target.name] :e.target.value})}value={formData.mobile} name="mobile" placeholder="enter mobile no" />
            <input type="text" onChange = {(e)=> setformData({... formData,[e.target.name] :e.target.value})} value={formData.email}name="email" placeholder="enter email" />
            <input type="password" onChange = {(e)=> setformData({... formData,[e.target.name] :e.target.value})} value={formData.password}name="password" placeholder="enter password" />
            <button type='submit'>submit</button>
            </form>
         )
    }