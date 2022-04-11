import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddProject from '../components/AddProject'
import { API_URL } from '../consts'
import ProjectCard from '../components/ProjectCard'

function ProjectListPage() {
  const [projects, setProjects] = useState([])

  const getAllProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/projects`)

      setProjects(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects()
  }, [])

  return (
    <div className="ProjectListPage">
      <AddProject refreshProjects={getAllProjects} />
      {projects.map((project) => {
        return <ProjectCard key={project._id} project={project} />
      })}
    </div>
  )
}

export default ProjectListPage
