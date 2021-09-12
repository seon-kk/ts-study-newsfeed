import express, { Request, Response, NextFunction } from 'express';
import newsfeedService from '../service/newsfeed';

export default class newsfeedController {

    async getNewsfeedList(req: Request, res: Response, next: NextFunction) {
        console.log('newsfeedList')
    }


}

