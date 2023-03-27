import express, { type Application, type Request, type Response, type NextFunction } from 'express'

const app: Application = express()
const port: number = 3002

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    status: 200,
    data: 'hello api'
  })
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
