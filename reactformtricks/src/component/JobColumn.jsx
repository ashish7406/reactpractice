import React from 'react'
import { JobStatus } from './JobStatus'
import "./JobColumn.css"
export const JobColumn = ({status,imgIcon}) => {
  return (
    <section className='columns1'>
        <h2 className='hdStatus'>{status} </h2>
        <img class="statusImgCs" src={imgIcon} alt="Need to start"></img>
          <JobStatus />

        </section>
  )
}


