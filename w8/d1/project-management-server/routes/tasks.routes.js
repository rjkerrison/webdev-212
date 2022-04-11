const router = require('express').Router()
const Task = require('../models/Task.model')

//  POST /api/tasks  -  Creates a new task
router.post('/tasks', async (req, res, next) => {
  const { title, description, projectId } = req.body

  try {
    const newTask = await Task.create({
      title,
      description,
      project: projectId,
    })

    res.json(newTask)
  } catch (err) {
    res.json(err)
  }
})

module.exports = router
