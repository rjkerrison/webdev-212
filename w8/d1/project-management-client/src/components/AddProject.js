import { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../consts'

const AddProject = ({ refreshProjects }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const requestBody = { title, description }

    try {
      await axios.post(`${API_URL}/api/projects`, requestBody)
      setTitle('')
      setDescription('')
      refreshProjects()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="AddProject">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddProject
