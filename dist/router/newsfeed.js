"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var newsfeed_1 = __importDefault(require("../controller/newsfeed"));
var router = express_1.default.Router();
var controller = new newsfeed_1.default();
router.get('/:studentIdx', controller.getNewsfeedList);
module.exports = router;
