const runner = require('child_process')
const info = require('./info.json')

const enhanceStudent = (student) => {
  if (student.github) {
    student.github = {
      username: student.github,
      link: `https://github.com/${student.github}/`,
    }
  }
}

info.forEach(enhanceStudent)

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

  if (formatArg === 'table') {
    return [
      student.name,
      '',
      'My Game',
      `https://github.com/${
        (student.projects && student.projects[0]?.github) || '???'
      }/`,
      '',
      student.projects && student.projects[0]?.deployment,
    ].join('\t')
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

const viewStudentProject = (student) => {
  const url = student.projects[0].deployment
  runner.exec(`open ${url}`)
}

const execute = () => {
  const args = process.argv.slice(2)
  const mode = args.shift()
  let student, formatArg

  switch (mode) {
    case 'random':
      student = chooseRandomStudent()
      formatArg = args.shift()
      console.log(format(student, formatArg))
      break
    case 'search':
      student = searchStudents(args.shift())
      console.log(format(student, args.shift()))
      break
    case 'list':
      const students = info
      formatArg = args.shift()
      students.forEach((student) => console.log(format(student, formatArg)))
      break
    case 'view':
      student = chooseRandomStudent()
      viewStudentProject(student)
      break
    default:
      help(mode)
      break
  }
}

execute()
