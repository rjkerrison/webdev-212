import { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../consts'

function AddTask({ projectId, refreshProject }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const requestBody = { title, description, projectId }
    try {
      await axios.post(`${API_URL}/api/tasks`, requestBody)
      setTitle('')
      setDescription('')
      refreshProject()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="AddTask">
      <h3>Add New Task</h3>

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

        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default AddTask
