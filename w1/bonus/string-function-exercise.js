const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const words = [
  'array',
  'words',
  'class',
  'pairs',
  'coder',
  'teach',
  'learn',
  'sleep',
  'photo',
]

const randomWord = words[Math.floor(Math.random() * words.length)]
let guessCount = 0

const getScore = (guess) => {
  const score = guess.split('').map((x, i) => {
    const index = randomWord.indexOf(x)
    if (index === -1) {
      return '⬜️'
    }
    if (randomWord[i] === x) {
      return '🟩'
    }
    return '🟨'
  })
  return score
}

const handleGuess = (guess) => {
  guessCount++
  console.log(`You guessed ${guess}`)

  const score = getScore(guess)
  console.log(score.join(''))

  if (guess !== randomWord) {
    if (guessCount >= 6) {
      console.log(`The word was '${randomWord}'`)
      rl.close()
    } else {
      getUserGuess()
    }
  } else {
    console.log(`YOU DID IT!`)
    rl.close()
  }
}

function getUserGuess() {
  rl.question('Guess a word: ', (guess) => {
    if (!words.includes(guess)) {
      /* BONUS: if they didn't make a valid guess (5 letters long) tell them and let them try again */
      /* BONUS BONUS: only allow guesses which are in the word list */
      console.log(`Please try again with one of the following words:
${words.join('\n')}`)
      getUserGuess()
      return
    }

    handleGuess(guess)
  })
}

getUserGuess()
// How would you allow them to guess multiple times?
