import { Request, Response, NextFunction } from 'express';

export default class ErrorMiddleware {
  public static error(_err: Error, _req: Request, res: Response, _next: NextFunction) {
    return res.status(500).json({ message: 'Internal Server Error!' });
  }
}