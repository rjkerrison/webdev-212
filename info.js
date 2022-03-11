const runner = require('child_process')
const fs = require('fs')
const info = require('./info.json')

const enhanceStudent = (student) => {
  if (student.github && typeof student.github === 'string') {
    student.github = {
      username: student.github,
      link: `https://github.com/${student.github}/`,
    }
  }
}
info.forEach(enhanceStudent)

const saveFile = () => {
  const dump = JSON.stringify(info, null, 2)
  fs.writeFile('./info.json', dump, function (err) {
    if (err) {
      return console.log(err)
    }
  })
}

const chooseRandomStudent = (filter) => {
  let choices = info
  if (filter) {
    choices = info.filter(filter)
  }
  const index = Math.floor(Math.random() * choices.length)
  return choices[index]
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

const suspenseMessages = [
  `Thinking…`,
  `Who's it going to be?`,
  `Getting ready to choose`,
  `Adding suspense…`,
  `🥁 🥁 🥁 🥁 🥁`,
  `Almost there…`,
]

const addSuspense = async () => {
  let suspenseRemaining = 100

  while (suspenseRemaining > 0) {
    const reduction = Math.floor(100 * Math.random())
    suspenseRemaining -= reduction
    const message =
      suspenseMessages[Math.floor(Math.random() * suspenseMessages.length)]
    console.log(message)
    await sleep(500)
  }
}

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const congratulate = (student) => {
  console.log(`CONGRATULATIONS, ${student.name}! It's you!`)
}

const execute = async () => {
  const args = process.argv.slice(2)
  const mode = args.shift()
  let student, formatArg

  switch (mode) {
    case 'suspense':
      await addSuspense()
      student = chooseRandomStudent((s) => !s.hasPresented)
      student.hasPresented = true
      congratulate(student)
      break
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

execute().then(saveFile)
