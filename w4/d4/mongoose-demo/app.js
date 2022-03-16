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
  const newUser = User.create({
    username: 'rjkerrison',
    email: 'robin.kerrison@ironhack.com',
  })

  newUser.then(tweet)
}

function tweet(user) {
  Tweet.create({
    content: 'hi guys just joined twitter, so excited, wow',
    user: user._id,
  }).then(console.log)
}

function getAllTweets() {
  Tweet.find().populate('user').then(console.log)
}
getAllTweets()
