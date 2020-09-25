import { Request, Response, NextFunction, RequestHandler } from 'express'

type AsyncHandler = (
  req: Request,
  res: Response,
  next?: NextFunction
) => Promise<any>

export function asyncWrapper(fn: AsyncHandler): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    ;(async (req, res, next) => {
      await fn(req, res, next)
      next()
    })(req, res, next).catch(next)
  }
}
