import 'dotenv/config'
import env from './config/env.js'
import { app } from './http/client.js'

app.listen(env.PORT, () => console.log(`Server listening at port ${env.PORT}`))
