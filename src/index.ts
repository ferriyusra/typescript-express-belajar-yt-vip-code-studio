import express, { type Application } from 'express'
import { routes } from './routes'

const app: Application = express()
const port: number = 3002

routes(app)
app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
