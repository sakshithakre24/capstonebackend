import { useEffect, useState } from "react"
import {createJob} from '../services'
import { useParams } from "react-router-dom" 
import { getJobById,updateJob } from "../services"
export default function NewJOb(){
    const [isEdit,setIsEdit]=useState(false)
    const {id} = useParams()
    useEffect(()=>{
        if(id){
            setIsEdit(true)
        }
    },[id])


    const [jobforData,setJobforData]= useState({
        companyName:'',
        jobPosition:'',
        salary:'',
        jobType:'',
    })
   useEffect(()=>{
    if (isEdit && id){
        const fetchJob = async () =>{
            const res = await getJobById(id)
            if(res.status === 200){
                const data = await res.json()
                setJobforData(data)
            }
            else{
                console.log(res)
            }
        }
        fetchJob()
    }
   },[isEdit,id])

     const handleCreateJob = async (e)=>{
        e.preventDefault()
        const res = isEdit ? await updateJob(id,jobforData): await createJob(jobforData)
        if(res.ststus === 200){
            const data = await res.json()
            console.log(data)
            setJobforData({
                companyName:'',
                jobPosition:'',
                salary:'',
                jobType:'',
            })
            alert('job created successfully')
        }
        else if (res.status === 401){
         alert('login to create job')
        }
        else{
            console.log(res)
            alert('error')
        }
    }

    return(
        <div>
            <h1>New Job</h1>
            <form onSubmit={handleCreateJob}>
             <input type="text" onChange={(e) => setJobforData ({...jobforData,[e.target.name]:e.target.value})}
              value={jobforData.companyName} name="companyName" placeholder ="enter company name"/>

              <input type="text" onChange={(e) => setJobforData ({...jobforData,[e.target.name]:e.target.value})}
              value={jobforData.jobPosition} name="jobPosition" placeholder ="enter job position"/>

              <input type="text" onChange={(e) => setJobforData ({...jobforData,[e.target.name]:e.target.value})}
              value={jobforData.salary} name="salary" placeholder ="enter salary"/>

             <input type="text" onChange={(e) => setJobforData ({...jobforData,[e.target.name]:e.target.value})}
              value={jobforData.jobType} name="jobType" /> 

              <option value ="">select job type</option>
              <option value ="full-time">full-time</option> 
              <option value ="part-time">part-time</option> 
              <option value ="contract">contract</option> 
              <option value ="internship">internship</option> 
              <option value ="freelance">freelance</option>
              <select/>
              <button type="submit">submit</button>



            </form>
           
        </div>
    )
}