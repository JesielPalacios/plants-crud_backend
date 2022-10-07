import mongoose from 'mongoose'

const PlantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      min: 3,
      max: 65,
    },
    discoveredAt: {
      type: Date,
      required: true,
    },
    benefits: {
      type: String,
      required: true,
      min: 3,
      max: 1200,
    },
    medicinal: {
      type: String,
      required: true,
      default: 'Yes',
      enum: ['Yes', 'Not'],
    },
    flower: {
      type: String,
      required: true,
      default: 'Yes',
      enum: ['Yes', 'Not'],
    },
    maximumHeight: {
      type: Number,
      required: true,
    },
    model: {
      type: String,
      required: true,
      default: 'Medicinal',
      enum: [
        'Medicinal',
        'Edible (even raw).',
        'Requires preparation to be edible.',
        'Poisonous',
        'Non eatable',
        'Ornament',
      ],
    },
    weight: {
      type: Number,
    },
    plantImage: {
      ref: 'Photo',
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default mongoose.model('Plant', PlantSchema)
