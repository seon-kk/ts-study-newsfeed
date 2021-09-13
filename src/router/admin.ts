import express from 'express';
import AdminController from '../controller/admin';
const router = express.Router();

const controller = new AdminController();


router.get('/', controller.getAdminList);
router.get('/:idx', controller.getAdminByIdx);


export = router;