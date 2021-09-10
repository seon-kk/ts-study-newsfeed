"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var router_1 = __importDefault(require("./router"));
var app = (0, express_1.default)();
app.get('/', function (request, response, next) {
    response.send('hello');
});
app.listen(80, function () {
    console.log('start');
});
app.use('/', router_1.default);
