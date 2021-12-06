import { Request, Response } from "express";

export interface BaseController<T>{
    findById(req: Request, Res: Response): any;
}