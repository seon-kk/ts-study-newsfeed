import express, { Request, Response, NextFunction } from 'express';
import StudentService from '../service/student';

const student: StudentService = new StudentService();

export default class StudentController {

    async getStudentList(req: Request, res: Response, next: NextFunction) {
        const result = await student.getStudentList();

        if(result.length < 1) {
            return res.status(404).json('error');
        }

        return res.status(200).json(result);
    }

}
