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
exports.Subs = void 0;
var typeorm_1 = require("typeorm");
var school_1 = require("./school");
var student_1 = require("./student");
var Subs = /** @class */ (function () {
    function Subs() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int" }),
        __metadata("design:type", Number)
    ], Subs.prototype, "idx", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return school_1.School; }, function (school) { return school.subs; }),
        (0, typeorm_1.JoinColumn)({ name: "schoolIdx" }),
        __metadata("design:type", school_1.School)
    ], Subs.prototype, "schoolIdx", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return student_1.Student; }, function (student) { return student.subs; }),
        (0, typeorm_1.JoinColumn)({ name: "studentIdx" }),
        __metadata("design:type", student_1.Student)
    ], Subs.prototype, "studentIdx", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Subs.prototype, "startDate", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "datetime", nullable: true }),
        __metadata("design:type", Date)
    ], Subs.prototype, "endDate", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Subs.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Subs.prototype, "updatedAt", void 0);
    Subs = __decorate([
        (0, typeorm_1.Entity)("subs", { schema: "newspeed" })
    ], Subs);
    return Subs;
}());
exports.Subs = Subs;
