const router = require('express').Router()
const Project = require('../models/Project.model')
const Task = require('../models/Task.model')

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

router.get('/projects', async (req, res, next) => {
  try {
    const projects = await Project.find()

    for (let project of projects) {
      project._doc.tasks = await Task.find({ project: project._id })
    }

    res.json(projects)
  } catch (err) {
    res.json(err)
  }
})

router.get('/projects/:projectId', async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.projectId)
    project._doc.tasks = await Task.find({ project: project._id })

    res.json(project)
  } catch (err) {
    res.json(err)
  }
})

module.exports = router
