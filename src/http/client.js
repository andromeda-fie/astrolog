import express from 'express'
import { router } from './router/index.js'
import swagger from 'swagger-ui-express'
import path from 'path'
import fs from 'fs'
import yaml from 'yaml'
import { fileURLToPath } from 'url'

const file = fs.readFileSync(path.resolve(fileURLToPath(import.meta.url), '../../../astrolog-spec.yaml'))
const swaggerDocument = yaml.parse(file.toString())

const app = express()

app.use(express.json())
app.use('/v1', router)
app.use('/docs', swagger.serve, swagger.setup(swaggerDocument));

export { app }
