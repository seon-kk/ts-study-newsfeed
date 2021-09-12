import express from 'express';
import postController from '../controller/post';

const router = express.Router();
const controller = new postController();

router.get('/:postIdx', controller.getPost);
router.post('/', controller.setNewPost);
router.put('/', controller.modifyPost);

export = router;