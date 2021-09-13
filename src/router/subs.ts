import express from 'express';
import SubsController from '../controller/subs';

const router = express.Router();
const controller = new SubsController();

router.get('/student/:idx', controller.getSubsByStudent);
router.post('/', controller.setNewSubs);
router.delete('/', controller.deleteSubs);

export = router;