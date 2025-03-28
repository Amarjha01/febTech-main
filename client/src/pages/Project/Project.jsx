import React, { useEffect } from 'react'
import LatestProject from './LatestProject'
import './Project.css'
import NewsLetter from './NewsLetter'
import Hero from '../../components/Hero/Hero'


const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
       <Hero title={"Latest Project"} subtitle={"Project"} path={"project.png"}/>
      <LatestProject />
      <NewsLetter />
    </>
  )
}

export default Project
