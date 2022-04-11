import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../consts'
import { useNavigate, useParams } from 'react-router-dom'

function EditProjectPage(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const { projectId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const populateProject = async () => {
      try {
        const { data: project } = await axios.get(
          `${API_URL}/api/projects/${projectId}`
        )

        setTitle(project.title)
        setDescription(project.description)
      } catch (error) {
        console.log(error)
      }
    }
    populateProject()
  }, [projectId])

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    // Create an object representing the body of the PUT request
    const requestBody = { title, description }

    // Make a PUT request to update the project
    await axios.put(`${API_URL}/api/projects/${projectId}`, requestBody)

    navigate(`/projects/${projectId}`)
  }

  const deleteProject = async () => {
    try {
      // Make a DELETE request to delete the project

      await axios.delete(`${API_URL}/api/projects/${projectId}`)

      navigate('/projects')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
      <button onClick={deleteProject}>Delete {title || 'project'}</button>
    </div>
  )
}

export default EditProjectPage
