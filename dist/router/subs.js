"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var subs_1 = __importDefault(require("../controller/subs"));
var router = express_1.default.Router();
var controller = new subs_1.default();
router.get('/student/:idx', controller.getNowSubsByStudent);
router.post('/', controller.setNewSubs);
router.delete('/', controller.deleteSubs);
module.exports = router;
