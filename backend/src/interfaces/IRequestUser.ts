import { Request } from 'express';
import IUser from './IUser';

export default interface IRequestUser extends Request {
  user?: IUser,
}
