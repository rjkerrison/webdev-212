import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../consts'
import AddTask from '../components/AddTask'
import TaskCard from '../components/TaskCard'

function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null)
  const { projectId } = useParams()

  // Helper function that makes a GET request to the API
  // and retrieves the project by id
  const getProject = async () => {
    try {
      const { data: project } = await axios.get(
        `${API_URL}/api/projects/${projectId}`
      )

      setProject(project)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProject()
  }, [])

  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      <AddTask refreshProject={getProject} projectId={projectId} />

      {project &&
        project.tasks.map((task) => <TaskCard key={task._id} task={task} />)}

      <Link to="/projects">Back to projects</Link>
      {project && (
        <Link to={`/projects/${projectId}/edit`}>Edit {project.title}</Link>
      )}
    </div>
  )
}

export default ProjectDetailsPage
