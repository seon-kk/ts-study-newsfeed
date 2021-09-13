import express, { Request, Response, NextFunction } from 'express';
import PostService from '../service/post';
import AdminService from '../service/admin';
import SchoolService from '../service/school';
import { IPost } from '../interface/post';

const admin: AdminService = new AdminService();
const post: PostService = new PostService();

export default class PostController {

    async getPost(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await post.getPost());
        } catch (error) {
            console.log(error);   
        }
    }

    async setNewPost(req: Request, res: Response, next: NextFunction) {
        try {
            const iPost: IPost = {
                subject: req.body.subject,
                content: req.body.content,
                adminIdx: req.body.adminIdx
            };

            if(await admin.getAdminByIdx(iPost.adminIdx)) {
                return res.json(await post.setNewPost(iPost));
            }

        } catch (error) {
            console.log(error);   
        }
    }

    async modifyPost(req: Request, res: Response, next: NextFunction) {
        try {
            const iPost: IPost = {
                idx: req.body.idx,
                subject: req.body.subject,
                content: req.body.content,
                adminIdx: req.body.adminIdx
            };

            if(await admin.getAdminByIdx(iPost.adminIdx)) {
                return res.json(await post.modifyPost(iPost));
            }
        } catch (error) {
            console.log(error);
        }
    }

    async deletePost(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await post.deletePost(req.params.idx));
        } catch (error) {
            console.log(error);   

        }
    }
}

