import { Router } from "express";
import * as controllers from '../controller/pilots.js'

const router = Router()

router.get('/', controllers.listAll)
router.get('/:id', controllers.findById)
router.post('/', controllers.create)
router.put('/:id', controllers.update)
router.delete('/:id', controllers.remove)

export { router }
