const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const reviewSchema = new Schema(
  {
    content: {
      type: String,
    },
    rating: {
      type: Schema.Types.Number,
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    film: { type: Schema.Types.ObjectId, ref: 'Film' },
  },
  {
    timestamps: true,
  }
)

const Review = model('Review', reviewSchema)

module.exports = Review
