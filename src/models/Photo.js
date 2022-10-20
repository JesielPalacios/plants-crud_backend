import mongoose from 'mongoose'

const PhotoSchema = new mongoose.Schema(
  {
    imagePath: {
      type: String,
      required: true
    },
    referenceId: {
      type: String,
      required: true
    },
    photoSubject: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default mongoose.model('Photo', PhotoSchema)
