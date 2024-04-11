import React from 'react'
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
    <div className='flex '>
        <div className='w-1/2'>
        <div className='py-12 font-titleFont'>
            <p className='text-sm text-designColor tracking-[4px]'>2005-present</p>
            <h2 className='text-4xl font-bold'>Eduactional Qualification</h2>
        </div>
        <div className='w-[95%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
            title="B.Tech - Computer Science and Engineering"
            subTitle="Odisha University of technology and Research"
            result="9.41 CGPA"
            desc="lkjh kjggj kjgu"/>
            <ResumeCard
            title="12th - Science"
            subTitle="DAV Cspur"
            result="94.8%"
            desc=""/>
            <ResumeCard
            title="B.Tech - Computer Science and Engineering"
            subTitle="Odisha University of technology and Research"
            result="92.2%"
            desc=""/>
        </div>
        </div>
        <div className='w-1/2'>
        <div className='py-12 font-titleFont'>
            <p className='text-sm text-designColor tracking-[4px]'>2005-present</p>
            <h2 className='text-4xl font-bold'>Job Experiences</h2>
        </div>
        <div className='w-[95%] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
            title="B.Tech - Computer Science and Engineering"
            subTitle="Odisha University of technology and Research"
            result="9.41 CGPA"
            desc="lkjh kjggj kjgu"/>
            <ResumeCard
            title="12th - Science"
            subTitle="DAV Cspur"
            result="94.8%"
            desc=""/>
            <ResumeCard
            title="B.Tech - Computer Science and Engineering"
            subTitle="Odisha University of technology and Research"
            result="92.2%"
            desc=""/>
        </div>
        </div>
        </div>
  )
}

export default Education