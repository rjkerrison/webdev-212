const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/webdev')

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
})

const User = mongoose.model('User', userSchema)

// define the schema
const tweetSchema = new mongoose.Schema({
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})
// create the model (and the collection)
const Tweet = mongoose.model('Tweet', tweetSchema)

function createUserAndTweet() {
  const newUserPromise = User.create({
    username: 'pauline',
    email: 'pauline.bertrand@ironhack.com',
  })

  newUserPromise
    .then((user) => tweet(user))
    .then((newTweet) => console.log(newTweet))
}
async function findUserAndTweet(username) {
  const foundUser = await User.findOne({ username: username })
  if (!foundUser) {
    console.error('could not find', username)
    return
  }
  const newTweet = await tweet(foundUser)
  console.log(newTweet)
}

async function tweet(user) {
  console.log('user is', user)
  const newTweet = await Tweet.create({
    content: 'hi guys just joined twitter, so excited, wow',
    user: user._id,
  })
  return newTweet
}

function getAllTweets() {
  Tweet.find().populate('user').then(console.log)
}

findUserAndTweet('brianval')
