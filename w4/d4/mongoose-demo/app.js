const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/webdev')

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
})

const User = mongoose.model('User', userSchema)

// define the schema
const tweetSchema = new mongoose.Schema(
  {
    content: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  // We can specify that we want automatic timestamps (createdAt, updatedAt)
  { timestamps: true }
)
// create the model (and the collection)
const Tweet = mongoose.model('Tweet', tweetSchema)

function createUserAndTweet(username) {
  const newUserPromise = User.create({
    username: username,
    email: 'example@ironhack.com',
  })

  return newUserPromise
    .then((user) => createTweet(user))
    .then((newTweet) => console.log(newTweet))
}

async function findUserAndTweet(username) {
  const foundUser = await User.findOne({ username: username })
  if (!foundUser) {
    console.error('could not find', username)
    return
  }
  const newTweet = await createTweet(foundUser)
  console.log(newTweet)
}

async function createTweet(user) {
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

async function editMostRecentTweet(username, content) {
  // We'll have to get the user's id from their username
  const user = await User.findOne({ username: username })

  // We specify how to find the tweet, and how to modify it
  const mostRecentTweet = await Tweet.findOne({
    user: user._id,
  }).sort({
    createdAt: -1,
  })

  // Let's update that tweet!
  const updateInfo = await mostRecentTweet.update({ content: content })

  console.log(mostRecentTweet, updateInfo)
}

editMostRecentTweet('bob', 'hey this is my edited tweet')
