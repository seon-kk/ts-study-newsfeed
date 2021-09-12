"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var yamljs_1 = __importDefault(require("yamljs"));
var admin_1 = __importDefault(require("./admin"));
var school_1 = __importDefault(require("./school"));
var post_1 = __importDefault(require("./post"));
var subs_1 = __importDefault(require("./subs"));
var newsfeed_1 = __importDefault(require("./newsfeed"));
var router = express_1.default.Router();
router.use('/admin', admin_1.default);
router.use('/school', school_1.default);
router.use('/post', post_1.default);
router.use('/subs', subs_1.default);
router.use('/newsfeed', newsfeed_1.default);
/* swagger_ui*/
var swaggerSpec = yamljs_1.default.load("./swagger.yml");
router.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
module.exports = router;
