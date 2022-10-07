import Router from "express"
import plantCtrl from "../controllers/plant.controller"
// import upload from "../middlewares/multer"

let router
router = Router(router)

router
  .route("/plants")

  // GET ALL PLANTS
  .get(plantCtrl.getAllPlants)

  // CREATE A PLANT
  .post(
    // upload.single('image'),
    plantCtrl.createNewPlant
  )

router
  .route("/plant/:id")

  // GET A PLANT BY ID
  .get(plantCtrl.getOnePlantById)

  // UPDATE A PLANT BY ID
  .put(plantCtrl.updateOnePlantById)

  // DELETE A PLANT BY ID
  .delete(plantCtrl.deleteOnePlantById)

export default router
