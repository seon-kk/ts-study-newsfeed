import express from 'express';
import subsController from '../controller/subs';

const router = express.Router();
const controller = new subsController();

router.get('/:studentIdx', controller.getSubs);
router.post('/', controller.setNewSubs);
router.delete('/', controller.deleteSubs);

export = router;