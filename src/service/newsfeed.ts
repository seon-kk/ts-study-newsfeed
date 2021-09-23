import express, { Request, Response, NextFunction } from 'express';
import StudentService from './student';
import SubsService from './subs';
import PostService from './post';
import ormService from './ormService';
import SchoolService from './school';
import { Brackets } from 'typeorm';
import { Subs } from '../entity/subs';
import { School } from '../entity/school';
import { Post } from '../entity/post';

//const subs: SubsService = new SubsService();
/*const school: SchoolService = new SchoolService();
const student: StudentService = new StudentService();
const post: PostService = new PostService();*/

const subs = new Subs();
const school = new School();

export default class NewsfeedService extends ormService {
    async getNewsFeedList(studentIdx: number) {
        const repo = await this.getConnection();

        const result = await repo.createQueryBuilder(Subs, 'subs')
            .select('*')
            .innerJoinAndSelect("subs.schoolIdx", "school")
            .leftJoinAndSelect("post", "subs", "subs.schoolIdx = post.schoolIdx")
            .where("subs.studentIdx = :studentIdx", {studentIdx: studentIdx})
            /*.andWhere("post.createdAt >= subs.startDate")
            .andWhere(new Brackets(qb => {
                qb.where("post.createdAt <= subs.endDate")
                .orWhere("subs.endDate is null")
            }))
            .orderBy("post.createdAt", 'ASC')*/
            .getMany();

        /*&for(const rs of result) {
            const ps = await repo.createQueryBuilder(Post, 'posts')
                .where()
        }  */  

        return result;

    }


}

