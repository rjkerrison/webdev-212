import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL = 'http://localhost:5005'

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
      {projects.map((project) => {
        return (
          <div className="ProjectCard card" key={project._id}>
            <Link to={`/projects/${project._id}`}>
              <h3>{project.title}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectListPage
