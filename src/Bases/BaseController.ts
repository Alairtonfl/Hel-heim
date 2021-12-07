import { Request, Response } from "express";

export interface BaseController<T>{
    findById(req: Request, Res: Response): any;
    findAll(req: Request, Res: Response): any;
    create(req: Request, Res: Response): any;
    update(req: Request, Res: Response): any;
    delete(req: Request, Res: Response): any;
}