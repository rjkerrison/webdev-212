import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  return (
    <div className="ProjectCard card" key={project._id}>
      <Link to={`/projects/${project._id}`}>
        <h3>{project.title}</h3>
      </Link>
    </div>
  )
}

export default ProjectCard
