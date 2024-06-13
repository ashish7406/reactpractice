import React,{useState} from 'react'
import {FormButton} from './FormButton'

export const Appform = () => {
  const [activityformdata,setActivityFormData]=useState({
    activity:"",
    status:"InProgress"
  })
  const callFunctionForm=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setActivityFormData(ini =>{
      return{...ini, [name]:value}

    })

    
  }
  const CallSubmitForm=(e)=>{
    e.preventDefault();
    console.log(activityformdata)
  }
  

  return (
    <div className='formheader'>
        <form onSubmit={CallSubmitForm}>
        <input name="activity" type="text" className='bot_in' placeholder='Enter the Job' onChange={callFunctionForm} />
<div className='formdetails'>
    <div className='bottomline'>

        <FormButton value="Read mails"/>
        <FormButton value="Send Emails"/>
        <FormButton value="Web Parsing"/>

        

        
        

    </div>

    <div>
        <select name="status" className='jobStatus' onChange={callFunctionForm} >
            <option value="tostart">To Start</option>
            <option value="InProgress">In Progress</option>
            <option value="Completed">Completed </option>
            </select>
            <button type='submit' className='submitdata'>Add Jobs</button>
            </div>
</div>
        </form>
      
    </div>
  )
}


