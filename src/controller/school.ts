import express, { Request, Response, NextFunction } from 'express';
import SchoolService from '../service/school';
import AdminService from '../service/admin';
import { ISchool } from '../interface/school';

const school: SchoolService = new SchoolService();
const admin: AdminService = new AdminService();

export default class SchoolController {

    async getSchoolList(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await school.getSchoolList();

            if (result.length < 1) {
                return res.status(404).json('error');
            }

            return res.status(200).json(result);
        } catch (error) {

        }
    }

    async setNewSchool(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body);
            const iSchool: ISchool = {
                name: req.body.name,
                region: req.body.region,
                adminIdx: req.body.adminIdx
            };

            if(await admin.getAdminByIdx(iSchool.adminIdx)) {
                await school.setNewSchool(iSchool);
            }

        } catch (error) {
            console.log(error)
        }
    }

}

