import mongoose from "mongoose"

const PhotoSchema = new mongoose.Schema(
  {
    imagePath: String,
    photoSubject: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default mongoose.model("Photo", PhotoSchema)
