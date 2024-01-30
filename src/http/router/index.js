import { Router } from "express";
import { router as pilotsRouter } from './pilots.js'

const router = Router()

router.use('/pilotos', pilotsRouter)

export { router }
