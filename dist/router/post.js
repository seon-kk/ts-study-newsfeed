"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var post_1 = __importDefault(require("../controller/post"));
var router = express_1.default.Router();
var controller = new post_1.default();
router.get('/:idx', controller.getPost);
router.delete('/:idx', controller.deletePost);
router.post('/', controller.setNewPost);
router.put('/', controller.modifyPost);
module.exports = router;
