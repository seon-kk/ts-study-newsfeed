import express from 'express';
import PostController from '../controller/post';

const router = express.Router();
const controller = new  PostController();

router.get('/:idx', controller.getPost);
router.delete('/:idx', controller.deletePost);
router.post('/', controller.setNewPost);
router.put('/', controller.modifyPost);


export = router;