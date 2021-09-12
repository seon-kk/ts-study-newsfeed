import express from 'express';
import schoolController from '../controller/school';
const router = express.Router();

const controller = new schoolController();

router.get('/', controller.getSchoolList);
router.post('/', controller.setNewSchool);


export = router;