import express from 'express';
import studentController from '../controller/student';
const router = express.Router();

const controller = new studentController();


router.get('/', async function (req, res, next) {
    return res.json(await controller.getStudentList());
});


export = router;