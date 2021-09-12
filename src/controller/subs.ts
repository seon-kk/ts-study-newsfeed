import express, { Request, Response, NextFunction } from 'express';
import subsService from '../service/subs';

export default class subsController {

    async getSubs(req: Request, res: Response, next: NextFunction) {
        console.log('subsList')
    }

    async setNewSubs(req: Request, res: Response, next: NextFunction) {
        console.log('subsList')
    }

    async deleteSubs(req: Request, res: Response, next: NextFunction) {
        console.log('subsList')
    }

}

