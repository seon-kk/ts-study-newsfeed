"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var student_1 = __importDefault(require("../controller/student"));
var router = express_1.default.Router();
var controller = new student_1.default();
router.get('/', controller.getStudentList);
module.exports = router;
