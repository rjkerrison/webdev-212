const info = require('./info.json')

const chooseRandomStudent = () => {
  const index = Math.floor(Math.random() * info.length)
  return info[index]
}

const searchStudents = (searchTerm) => {
  const student = info.find((s) => {
    return s.name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  return student
}

const format = (student, formatArg) => {
  // e.g. name,project1.github
  if (!formatArg) {
    return student
  }

  const properties = formatArg.split(',')
  const result = properties.reduce((dict, property) => {
    // e.g. project1.github
    let indices = property.split('.')
    let fromValue = student
    let intoValue = null
    let nextIntoValue = dict
    let index
    for (index of indices) {
      intoValue = nextIntoValue
      if (!intoValue.hasOwnProperty(index)) {
        intoValue[index] = {}
      }
      // drop down a level
      nextIntoValue = intoValue[index]
      fromValue = fromValue[index]
    }
    // At the final step, add
    intoValue[index] = fromValue

    return dict
  }, {})
  return result
}

const help = (mode) => {
  console.log(`Unknown mode: ${mode}`)
}

const execute = () => {
  const args = process.argv.slice(2)
  const mode = args.shift()

  switch (mode) {
    case 'random':
      student = chooseRandomStudent()
      console.log(format(student, args))
      break
    case 'search':
      student = searchStudents(args.shift())
      console.log(format(student, args.shift()))
      break
    default:
      help(mode)
      break
  }
}

execute()
