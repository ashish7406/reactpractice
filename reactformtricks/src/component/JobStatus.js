import React from 'react'
import { FormButton } from './FormButton'
import deleteIcon from '../images/delete.png'
import "./Jobstatus.css"
export const JobStatus = () => {
  return (
    <article className='jobStateArt'>
      <p className='textArticle'>Lorem Ipsum text</p>
      <div className='jobBox'>
      <div className='jobStatBox'>
        <FormButton value='Parse Emails'/>
        <FormButton value='SAP Extraction '/>
      </div>
      <div className='jobDelete'>
        <img src={deleteIcon} className='deletingImg' alt='Delete'/>

      </div>

      </div>
    </article>
  )
}


