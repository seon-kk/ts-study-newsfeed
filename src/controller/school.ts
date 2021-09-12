import express, { Request, Response, NextFunction } from 'express';
import schoolService from '../service/school';

export default class schoolController {

    async getSchoolList() {
        console.log('schoolList')
    }

    async setNewSchool(req: Request, res: Response, next: NextFunction) {
        console.log('schoolList')
    }

}

