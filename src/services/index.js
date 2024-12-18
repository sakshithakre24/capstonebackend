
const URL = 'https://capstone-blog-api-1.onrender.com'

export const register = (data)=>{
     fetch(`${URL}/user/register`, {
        method:'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body:JSON.stringify(data),
    })
}

export const login  = (data)=>{
  fetch(`${URL}/user/login`, {
     method:'POST',
     headers: {
       'Content-type': 'application/json',
     },
     body:JSON.stringify(data),
 })
}
// for jobs
 
export const getJobs  = ()=>{
  fetch(`${URL}/jobs`, {
     method:'GET',
     headers: {
       'Content-type': 'application/json',
     },
     
 })
}

export const createJob  = ()=>{
  fetch(`${URL}/job`, {
     method:'POST',
     headers: {
       'Content-type': 'application/json',
       'authorization': `${localStorage.getItem('token')}`
     },
     body:JSON.stringify(data),
 })
}

export const updateJob  = (id,data)=>{
  fetch(`${URL}/job/${id}`, {
     method:'PUT',
     headers: {
       'Content-type': 'application/json',
       'authorization': `${localStorage.getItem('token')}`
     },
     body:JSON.stringify(data),
 })
}

export const getJobById  = (id)=>{
  fetch(`${URL}/job/${id}`, {
     method:'GET',
     headers: {
       'Content-type': 'application/json',
       'authorization': `${localStorage.getItem('token')}`
     },
    
 })
}

export const deleteJob  = (id)=>{
  return fetch(`${URL}/job/${id}`, {
     method:'GET',
     headers: {
       'Content-type': 'application/json',
       'authorization': `${localStorage.getItem('token')}`
     },
    
 })
}