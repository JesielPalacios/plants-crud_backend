import PlantSchema from '../models/Plant'

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
    const plants = query ? await PlantSchema.find().sort({ _id: -1 }).limit(5) : await PlantSchema.find()

    if (plants.length === 0) res.status(204).json({ message: "There aren't plants" })

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
  if (!(req.body.name || req.body.discoveredAt || req.body.benefits || req.body.medicinal || req.body.flower || req.body.maximumHeight || req.body.model)) {
    return res.status(400).json({ message: 'Some data is needed' })
  }

  let newPlant

  try {
    newPlant = new PlantSchema({ ...req.body })
    // console.log(newPlant._id.toString().replace('new ObjectId(")').replace('")'))

    if (req.files) {
      if (req.files === null) {
        return res.status(400).json({ message: 'No file uploaded' })
      }

      // const file = req.files.file
      // file.name = uuid() + file.name

      // const newPhoto = new PhotoSchema({
      //   imagePath: '/uploads/' + file.name,
      //   photoSubject: req.body._id,
      // })
      // const savedPhoto = await newPhoto.save()

      // newPlant = new PlantSchema({
      //   ...req.body,
      //   plantImage: savedPhoto._id,
      // })
    }

    const savedPlant = await newPlant.save()
    res.status(201).json(savedPlant)
  } catch (err) {
    // switch (err) {
    //   case err.code === 11000:
    //     console.log('err.code', err.code)
    //     res.status(400).send('Something went wrong')
    //     break

    //     default:
    //       // res.status(500).json({ err: err })
    //       res.status(500)
    //       break
    //     }

    if (err.code === 11000) {
      console.log('err.code', err.code)
      // res.status(400).send('Something went wrong')
      res.status(400).json(err)
    } else {
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
  try {
    const updatedPlant = await PlantSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedPlant)
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
    res.status(200).json({ message: 'Plant has been deleted...' })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export default {
  getAllPlants,
  createNewPlant,
  getOnePlantById,
  updateOnePlantById,
  deleteOnePlantById,
}
