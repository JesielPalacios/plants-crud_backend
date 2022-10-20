import { v4 as uuid } from 'uuid'
import PlantSchema from '../models/Plant'
import PhotoSchema from '../models/Photo'
import fs from 'fs-extra'
import path from 'path'
/**
 * Controller for get all the plants from the database, got a sort method too.
 *
 * @constructor
 * @param {Request} req - request objet.
 * @param {Response} res - response objet.
 */
async function getAllPlants(req, res) {
  const query = req.query.new

  try {
    const plants = query
      ? await PlantSchema.find().sort({ _id: -1 }).limit(5)
      : await PlantSchema.find()

    // if (plants.length === 0) res.status(204).json({ message: "There aren't plants" })
    if (plants.length === 0) res.status(204)

    res.status(200).json(plants)
  } catch (err) {
    res.status(500).json(err)
  }
}

/**
 * Controller for create a new plant.
 *
 * @constructor
 * @param {Request} req - request objet.
 * @param {Response} res - response objet.
 */
async function createNewPlant(req, res) {
  if (
    !(
      req.body.name ||
      req.body.discoveredAt ||
      req.body.benefits ||
      req.body.medicinal ||
      req.body.flower ||
      req.body.maximumHeight ||
      req.body.model
    )
  ) {
    return res.status(400).json({ message: 'Some data is needed' })
  }

  const plantInStock = await PlantSchema.findOne({
    name: req.body.name
  })

  if (plantInStock) {
    res.status(400).json({ message: 'Plant already exit' })
  } else {
    try {
      let photoId = uuid()

      let newPlant = req.files
        ? new PlantSchema({
            ...req.body,
            plantImage: `/uploads/${req.files.plantPhoto.name
              .split(' ')
              .join('')}`
          })
        : new PlantSchema({ ...req.body })

      if (req.files) {
        if (req.files === null) {
          return res.status(400).json({ message: 'No file uploaded' })
        }

        const file = req.files.plantPhoto

        const newPhoto = new PhotoSchema({
          imagePath: '/uploads/' + file.name.split(' ').join(''),
          photoSubject: newPlant._id.valueOf(),
          referenceId: photoId
        })
        const savedPhoto = await newPhoto.save()
        // newPlant.plantImage = savedPhoto._id.valueOf()
        // newPlant.plantImage = savedPhoto._id
        // .valueOf()
        // .toString()
        // .replace('new ObjectId("')
        // .replace('")')

        file.mv(`./uploads/${file.name.split(' ').join('')}`, (err) => {
          if (err) {
            console.error(err)
            return res.status(500).send(err)
          }

          // res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
        })
      }

      const savedPlant = await newPlant.save()
      res.status(201).json(savedPlant)
    } catch (err) {
      // if (err.code === 11000) {
      //   console.log('err.code', err.code)
      //   // res.status(400).send('Something went wrong')
      //   // res.status(400).json({ message: 'Plant already exit' })
      //   res.status(400).json({ message: err })
      //   // res.status(400)
      // } else {
      //   res.status(500).json(err)
      // }
      res.status(500).json(err)
    }
  }
}

/**
 * Controller for get a plant by id.
 *
 * @constructor
 * @param {Request} req - request objet.
 * @param {Response} res - response objet.
 */
async function getOnePlantById(req, res) {
  try {
    const plant = await PlantSchema.findById(req.params.id)
    const { _id, ...others } = plant._doc
    // res.status(200).json(others)
    res.status(200).json(plant)
  } catch (err) {
    res.status(500).json(err)
  }
}

/**
 * Controller for update a plant by id.
 *
 * @constructor
 * @param {Request} req - request objet.
 * @param {Response} res - response objet.
 */
async function updateOnePlantById(req, res) {
  let photoId = uuid()

  try {
    const updatedPlant = await PlantSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    )

    updatedPlant.plantImage = `/uploads/${req.files.plantPhoto.name}`

    if (req.files) {
      if (req.files === null) {
        return res.status(400).json({ message: 'No file uploaded' })
      }

      const file = req.files.plantPhoto

      const newPhoto = new PhotoSchema({
        imagePath: '/uploads/' + file.name.split(' ').join(''),
        photoSubject: updatedPlant._id.valueOf(),
        referenceId: photoId
      })
      const savedPhoto = await newPhoto.save()
      // newPlant.plantImage = savedPhoto._id.valueOf()
      // newPlant.plantImage = savedPhoto._id
      // .valueOf()
      // .toString()
      // .replace('new ObjectId("')
      // .replace('")')

      file.mv(`./uploads/${file.name.split(' ').join('')}`, (err) => {
        if (err) {
          console.error(err)
          return res.status(500).send(err)
        }

        // res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
      })
    }
    const savedPlant = await updatedPlant.save()
    res.status(201).json(savedPlant)

    // res.status(200).json(updatedPlant)
  } catch (err) {
    res.status(500).json(err)
  }
}

/**
 * Controller for delete a plant by id.
 *
 * @constructor
 * @param {Request} req - request objet.
 * @param {Response} res - response objet.
 */
async function deleteOnePlantById(req, res) {
  try {
    await PlantSchema.findByIdAndDelete(req.params.id)

    // let photo = await PhotoSchema.deleteOne({ photoSubject: req.params.id })
    // let photo = await PhotoSchema.findOneAndDelete({ photoSubject: req.params.id })
    let photo = await PhotoSchema.findOneAndRemove({
      photoSubject: req.params.id
    })

    // await console.log('photo', photo)

    if (photo) {
      await fs.unlink(path.resolve('.' + photo.imagePath))
    }
    res.status(200).json({ message: 'Plant has been deleted...' })
  } catch (err) {
    // console.log(err)
    res.status(500).json(err)
  }
}

export default {
  getAllPlants,
  createNewPlant,
  getOnePlantById,
  updateOnePlantById,
  deleteOnePlantById
}
