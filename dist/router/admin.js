"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var admin_1 = __importDefault(require("../controller/admin"));
var router = express_1.default.Router();
var controller = new admin_1.default();
router.get('/', controller.getAdminList);
router.get('/:idx', controller.getAdminByIdx);
module.exports = router;
