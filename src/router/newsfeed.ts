import express from 'express';
import newsfeedController from '../controller/newsfeed';

const router = express.Router();
const controller = new newsfeedController();

router.get('/:studentIdx', controller.getNewsfeedList);


export = router;