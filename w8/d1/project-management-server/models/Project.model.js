const { Schema, model } = require('mongoose')

const projectSchema = new Schema({
  title: String,
  description: String,
})

const Project = model('Project', projectSchema)

module.exports = Project
