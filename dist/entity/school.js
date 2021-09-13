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
var typeorm_1 = require("typeorm");
var admin_1 = require("./admin");
var post_1 = require("./post");
var subs_1 = require("./subs");
var School = /** @class */ (function () {
    function School() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int" }),
        __metadata("design:type", Number)
    ], School.prototype, "idx", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({ type: "varchar" }),
        __metadata("design:type", String)
    ], School.prototype, "name", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({ type: "varchar" }),
        __metadata("design:type", String)
    ], School.prototype, "region", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], School.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], School.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return admin_1.Admin; }, function (admin) { return admin.schoolIdx; }),
        typeorm_1.JoinColumn({ name: "adminIdx" }),
        __metadata("design:type", admin_1.Admin)
    ], School.prototype, "adminIdx", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return post_1.Post; }, function (post) { return post.schoolIdx; }),
        __metadata("design:type", Array)
    ], School.prototype, "posts", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return subs_1.Subs; }, function (subs) { return subs.schoolIdx; }),
        __metadata("design:type", Array)
    ], School.prototype, "subs", void 0);
    School = __decorate([
        typeorm_1.Entity("school", { schema: "newspeed" })
    ], School);
    return School;
}());
exports.School = School;
