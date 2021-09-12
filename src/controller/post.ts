import express, { Request, Response, NextFunction } from 'express';
import postService from '../service/post';

export default class postController {

    async getPost(req: Request, res: Response, next: NextFunction) {
        console.log('postList')
    }

    async setNewPost(req: Request, res: Response, next: NextFunction) {
        console.log('postList')
    }

    async modifyPost(req: Request, res: Response, next: NextFunction) {
        console.log('postList')
    }
}

