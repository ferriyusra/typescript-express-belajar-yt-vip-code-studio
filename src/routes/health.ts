import { Router, type Request, type Response, type NextFunction } from 'express'

export const HealthRouter: Router = Router()

// localhost:3002/health
HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    status: true,
    statusCode: 200
  })
})
