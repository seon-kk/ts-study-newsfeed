import express, { Request, Response, NextFunction } from 'express';
import NewsfeedService from '../service/newsfeed';
import SubsService from '../service/subs';
import StudentService from '../service/student';

const student: StudentService = new StudentService();
const subs: SubsService = new SubsService();
const feeds: NewsfeedService = new NewsfeedService();

export default class NewsfeedController {

    async getNewsfeedList(req: Request, res: Response, next: NextFunction) {
        try {
            const studentIdx: number = Number(req.params.studentIdx);

            //학생 확인
            const std = await student.getStudentByIdx(studentIdx);
            if(std.length < 1) {
                return res.status(400).send({
                    studentIdx: studentIdx,
                    msg:'해당하는 학생이 없습니다.'
                });
            }

            //구독 유무 확인
            const rsub = await subs.getTotalSubsByStudent(studentIdx);
            if(rsub.length < 1) {
                return res.status(400).send({ 
                    studentIdx: studentIdx,
                    msg:'구독한 학교가 없습니다.'
                });
            }

            //피드
            return res.json(await feeds.getNewsFeedList(studentIdx));
            


        } catch(error) {
            console.log(error)
        }
    }
}

