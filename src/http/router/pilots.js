import { Router } from "express";
import * as handlers from '../controller/pilots.js'

const router = Router()

router.use('/', handlers.listAll)

export { router }
