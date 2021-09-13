import express from 'express';
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import adminRouter from './admin';
import studentRouter from './student';
import schoolRouter from './school';
import postRouter from './post';
import subsRouter from './subs';
import newsfeedRouter from './newsfeed';

const router = express.Router();


router.use('/admin', adminRouter);
router.use('/student', studentRouter);
router.use('/school', schoolRouter);
router.use('/post', postRouter);
router.use('/subs', subsRouter);
router.use('/newsfeed', newsfeedRouter);


/* swagger_ui*/
const swaggerSpec = YAML.load("./swagger.yml");
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export = router;