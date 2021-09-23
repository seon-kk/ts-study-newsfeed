import express, { Request, Response, NextFunction } from 'express';
import SubsService from '../service/subs';
import StudentService from '../service/student';
import SchoolService from '../service/school';
import { ISubs } from '../interface/subs';
import { NowTime } from '../utils/dateTime';

const subs = new SubsService();
const student = new StudentService();
const school = new SchoolService();
const nowTime = new NowTime();

export default class SubsController {

    async getNowSubsByStudent(req: Request, res: Response, next: NextFunction) {
        try {
            res.json(await subs.getNowSubsByStudent(req.params.idx));
        } catch (error) {
            console.log(error);
        }
    }

    async setNewSubs(req: Request, res: Response, next: NextFunction) {
        try {

            const now = nowTime.nowTimeStr();

            const iSubs: ISubs = {
                studentIdx: req.body.studentIdx,
                schoolIdx: req.body.schoolIdx,
                startDate: now
            };

            //학생 idx 확인
            const std = await student.getStudentByIdx(iSubs.studentIdx);
            if(std.length < 1) {
                return res.status(400).send({
                    studentIdx: iSubs.studentIdx,
                    msg:'해당하는 학생이 없습니다.'
                });
            }

            //학교 idx 확인
            const sch = await school.getSchoolByIdx(iSubs.schoolIdx);
            if(sch.length < 1) {
                return res.status(400).send({
                    schoolIdx: iSubs.schoolIdx,
                    msg:'해당하는 학생이 없습니다.'
                });
            }

            //이미 구독중인지 확인
            const rsub = await subs.getNowSubs(iSubs);
            if(rsub.length > 0) {
                return res.status(400).send({ 
                    schoolIdx: iSubs.schoolIdx,
                    msg:'이미 해당 학교를 구독중입니다.'
                });
            }

            res.json(await subs.setNewSubs(iSubs));
        } catch (error) {
            console.log(error);
        }
    }

    async deleteSubs(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json(await subs.deleteSubs(req.params.idx));
        } catch (error) {
            console.error(error);
        }
    }

}

