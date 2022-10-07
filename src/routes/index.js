import Router from 'express'

import plantRoutes from "./plant.routes"
import photoRoutes from "./photo.routes"

let router
router = Router(router)
router.use("/", plantRoutes)
router.use("/", photoRoutes)

export default router
