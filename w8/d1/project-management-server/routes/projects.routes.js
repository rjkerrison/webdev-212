const router = require('express').Router()
const Project = require('../models/Project.model')

//  POST /api/projects  -  Creates a new project
router.post('/projects', async (req, res, next) => {
  const { title, description } = req.body

  try {
    const response = await Project.create({ title, description })
    res.json(response)
  } catch (err) {
    res.json(err)
  }
})

module.exports = router
