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
var school_1 = require("./school");
var post_1 = require("./post");
var Admin = /** @class */ (function () {
    function Admin() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int" }),
        __metadata("design:type", Number)
    ], Admin.prototype, "idx", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({ type: "varchar", length: 256 }),
        __metadata("design:type", String)
    ], Admin.prototype, "name", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return school_1.School; }, function (school) { return school.adminIdx; }),
        __metadata("design:type", school_1.School)
    ], Admin.prototype, "schoolIdx", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Admin.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Admin.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return post_1.Post; }, function (post) { return post.adminIdx; }),
        __metadata("design:type", Array)
    ], Admin.prototype, "posts", void 0);
    Admin = __decorate([
        typeorm_1.Entity("admin", { schema: "newspeed" })
    ], Admin);
    return Admin;
}());
exports.Admin = Admin;
