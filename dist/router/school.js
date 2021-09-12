"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var school_1 = __importDefault(require("../controller/school"));
var router = express_1.default.Router();
var controller = new school_1.default();
router.get('/', controller.getSchoolList);
router.post('/', controller.setNewSchool);
module.exports = router;
