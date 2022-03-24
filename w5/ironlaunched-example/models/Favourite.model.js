const { Schema, model } = require('mongoose')

const favouriteSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  film: { type: Schema.Types.ObjectId, ref: 'Film' },
})

const Favourite = model('Favourite', favouriteSchema)

module.exports = Favourite
