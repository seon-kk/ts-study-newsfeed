"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var typeorm_1 = require("typeorm");
var subs_1 = require("./subs");
var Student = /** @class */ (function () {
    function Student() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int" }),
        __metadata("design:type", Number)
    ], Student.prototype, "idx", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ type: "varchar", length: 256 }),
        __metadata("design:type", String)
    ], Student.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Student.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Student.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return subs_1.Subs; }, function (subs) { return subs.studentIdx; }),
        __metadata("design:type", Array)
    ], Student.prototype, "subs", void 0);
    Student = __decorate([
        (0, typeorm_1.Entity)("student", { schema: "newspeed" })
    ], Student);
    return Student;
}());
exports.Student = Student;
