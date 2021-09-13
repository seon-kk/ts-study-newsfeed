import express from 'express';
import StudentController from '../controller/student';
const router = express.Router();

const controller = new StudentController();


router.get('/', controller.getStudentList);


export = router;