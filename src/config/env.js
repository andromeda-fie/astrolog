import { z } from 'zod'

const schema = z.object({
    PORT: z.number().default(3000),
    DATABASE_URL: z.string(),
})

export default schema.parse(process.env)
