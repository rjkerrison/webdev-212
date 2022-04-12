const router = require('express').Router()
const { default: mongoose } = require('mongoose')
const { isAuthenticated } = require('../middleware/jwt.middleware')
const Project = require('../models/Project.model')
const Task = require('../models/Task.model')

//  POST /api/projects  -  Creates a new project
router.post('/projects', isAuthenticated, async (req, res, next) => {
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
    const { projectId } = req.params

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
      res.status(400).json({ message: 'Specified id is not valid' })
      return
    }

    const project = await Project.findById(projectId)
    project._doc.tasks = await Task.find({ project: project._id })

    res.json(project)
  } catch (err) {
    res.json(err)
  }
})

router.put('/projects/:projectId', async (req, res, next) => {
  try {
    const { projectId } = req.params

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
      res.status(400).json({ message: 'Specified id is not valid' })
      return
    }

    const project = await Project.findByIdAndUpdate(projectId, req.body, {
      new: true,
    })

    res.json(project)
  } catch (err) {
    res.json(err)
  }
})

router.delete('/projects/:projectId', async (req, res, next) => {
  try {
    const { projectId } = req.params

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
      res.status(400).json({ message: 'Specified id is not valid' })
      return
    }

    await Project.findByIdAndRemove(projectId)

    res.status(204).send()
  } catch (err) {
    res.json(err)
  }
})

module.exports = router
