import express, { Request, Response, NextFunction } from 'express';
import PostService from '../service/post';
import AdminService from '../service/admin';
import SchoolService from '../service/school';
import { IPost } from '../interface/post';
import { SimpleConsoleLogger } from 'typeorm';
import { School } from '../entity/school';

const admin: AdminService = new AdminService();
const post: PostService = new PostService();
const school: SchoolService = new SchoolService();

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

            const adms = await admin.getAdminByIdx(iPost.adminIdx);
            if(adms.length < 1) {
                return res.status(400).send({
                    adminIdx: iPost.adminIdx,
                    msg:'해당하는 관리자가 없습니다.'
                });
            }

            const sch = await school.getSchoolByAdminIdx(iPost.adminIdx);
            if(sch.length < 1) {
                return res.status(400).send({
                    adminIdx: iPost.adminIdx,
                    msg:'개설된 학교가 없습니다.'
                });
            }
            console.log(sch.school_idx);
            iPost.schoolIdx = Number(sch.school_idx);

            return res.json(await post.setNewPost(iPost));

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

