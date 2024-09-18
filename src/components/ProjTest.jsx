import React, {useState} from 'react'
import projects from '../data/projects'


const ProjTest = (project) => {

  const [proj, setProj] = useState();

  if(project.id in projects){
    setProj(projects[project.id])
  }

  return (
    <div>

    </div>
  )
}

export default ProjTest