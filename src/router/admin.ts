import express from 'express';
import adminController from '../controller/admin';
const router = express.Router();

const controller = new adminController();


router.get('/', controller.getAdminList);


export = router;