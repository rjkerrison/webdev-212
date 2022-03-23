// app.js
const bcrypt = require('bcryptjs')
const saltRounds = 10

const plainPassword1 = 'HelloWorld'
const plainPassword2 = 'helloworld'

const salt = bcrypt.genSaltSync(saltRounds)

console.log(`Salt => ${salt}`)

const hash1 = bcrypt.hashSync(plainPassword1, salt)
const hash2 = bcrypt.hashSync(plainPassword2, salt)

const verifyPass1 = bcrypt.compareSync(plainPassword1, hash1)
const verifyPass2 = bcrypt.compareSync('some wrong password', hash2)

console.log(`Hash 1: ${hash1}`)
console.log(`Hash 2: ${hash2}`)
console.log('----------------------------------------')
console.log(
  `Is plainPassword1 corresponding to the created hash1: ${verifyPass1}`
)
console.log(
  `Is plainPassword2 corresponding to the created hash2: ${verifyPass2}`
)

console.log(
  'comparing to previous hash',
  bcrypt.compareSync(
    plainPassword1,
    '$2a$10$mrnYWar5TRc3ph6pEBOZc.hjcOMs.z0La6leJI28bngyYOnJ6QIGq'
  )
)

const decryptSync = () => {
  const hash = bcrypt.hashSync('password56876', salt)
  const start = Date.now()

  for (let i = 0; i < 100000; i++) {
    const result = bcrypt.compareSync(`password${i}`, hash)
    if (result) {
      console.log(`The password is "password${i}". In ${Date.now() - start}ms.`)
      break
    } else if (i % 1000 === 0) {
      console.log(`The password is not "password${i}"`)
    }
  }
}

const decryptAsync = async (limit) => {
  const hash = await bcrypt.hash(
    `password${Math.floor(Math.random() * limit)}`,
    salt
  )
  const start = Date.now()

  const possibilities = Array.from({ length: limit }).map(
    (_, i) => `password${i}`
  )

  const promise = new Promise((resolve, reject) => {
    possibilities.forEach((possiblePassword, i) => {
      bcrypt.compare(possiblePassword, hash).then((result) => {
        //console.log(i, possiblePassword)
        if (result) {
          resolve(possiblePassword)
        } else if (i % 1000 === 0) {
          console.log(
            `The password is not "${possiblePassword}". In ${
              Date.now() - start
            }ms.`
          )
          //resolve(possiblePassword)
        } else {
          // reject(possiblePassword)
        }
      })
    })
  })
  console.log({ promise })

  const foundPassword = await promise

  return `The password is "${foundPassword}". In ${Date.now() - start}ms.`
}

decryptAsync(100000).then((info) => console.log(info))
