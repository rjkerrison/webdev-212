import React from 'react'

const TaskCard = ({ task }) => {
  return (
    <div className="TaskCard card" key={task._id}>
      <h3>{task.title}</h3>
      <h4>Description:</h4>
      <p>{task.description}</p>
    </div>
  )
}

export default TaskCard
