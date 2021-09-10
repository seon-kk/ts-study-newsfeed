import express from 'express';
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const router = express.Router();




/* swagger_ui*/
const swaggerSpec = YAML.load("./swagger.yml");
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export = router;