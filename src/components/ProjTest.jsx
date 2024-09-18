import React from 'react'
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';

const ProjTest = (project) => {
  console.log('ProjectTest component - Received project:', project);
  
  if (!project) {
    return <div>No project data available</div>;
  }
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Contact />
    </div>
  )
}

export default ProjTest;