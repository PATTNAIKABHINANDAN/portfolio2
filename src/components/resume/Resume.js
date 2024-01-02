import React,{useState} from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Achievements from './Achievements'

const Resume = () => {
    const [educationData,setEducationData]=useState(true);
    const [skillData,setSkillData]=useState(false);
    const [experienceData,setExperienceData]=useState(false);
    const [acheivementData,setAcheivementData]=useState(false);
  return (
    <section
    id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center '>
        <Title
        title="EXPERIENCE OF MORE THAN 3 YEARS"
        desc="My RESUME"/>
        </div>
        <div className='p-100px'>
            <ul className='w-full grid grid-cols-4'>
                <li onClick={()=>setEducationData(true) & setSkillData(false) & setAcheivementData(false) & setExperienceData(false)} className='resumeLi'>Education</li>
                <li onClick={()=>setEducationData(false) & setSkillData(true) & setAcheivementData(false) & setExperienceData(false)} className='resumeLi'>Professional Skills</li>
                <li onClick={()=>setEducationData(false) & setSkillData(false) & setAcheivementData(false) & setExperienceData(true)} className='resumeLi'>Experience</li>
                <li onClick={()=>setEducationData(false) & setSkillData(false) & setAcheivementData(true) & setExperienceData(false)} className='resumeLi'>Achievements</li>
            </ul>
        </div>
        {
            educationData && <Education/>
        }
        {
            !educationData && skillData && <Skills/>
        }
        {
            acheivementData && !educationData && <Achievements/>
        }
        {
            experienceData && !educationData && <Experience/>
        }
    </section>
  )
}

export default Resume