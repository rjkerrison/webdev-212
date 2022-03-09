const info = require('./info.json')

const chooseRandomStudent = () => {
  const index = Math.floor(Math.random() * info.length)
  return info[index]
}

const help = (args) => {
  console.log(`Unknown arg: ${args[0]}`)
}

const execute = () => {
  const args = process.argv.slice(2)

  switch (args[0]) {
    case 'random':
      student = chooseRandomStudent()
      console.log(student)
      break
    default:
      help(args)
      break
  }
}

execute()
