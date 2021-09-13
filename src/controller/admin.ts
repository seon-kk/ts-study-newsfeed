import express, { Request, Response, NextFunction } from 'express';
import AdminService from '../service/admin';

const admin: AdminService = new AdminService();

export default class AdminController {
    async getAdminList(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await admin.getAdminList();
            return res.status(200).json(result);
        } catch(error) {

        }
    }

    async getAdminByIdx(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await admin.getAdminByIdx(req.params.idx)
            return res.status(200).json(result);
        } catch(error) {

        }
    }
}

