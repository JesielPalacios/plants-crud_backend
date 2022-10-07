import Router from "express"
import photoCtrl from "../controllers/photo.controller"
import upload from "../middlewares/multer"

let router
router = Router(router)

router
  .route("/photos")

  // GET ALL PHOTOS
  .get(photoCtrl.photos)

  // CREATE A NEW PHOTO
  .post(upload.single("image"), photoCtrl.createPhoto)

router
  .route("/photo/:id")

  // GET A PHOTO BY ID
  .get(photoCtrl.photo)

  // UPDATE A PHOTO BY ID
  .put(photoCtrl.updatePhoto)

  // DELETE A PHOTO BY ID
  .delete(photoCtrl.deletePhoto)

export default router
