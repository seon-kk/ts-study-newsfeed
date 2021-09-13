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
var admin_1 = require("./admin");
var Post = /** @class */ (function () {
    function Post() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: "int" }),
        __metadata("design:type", Number)
    ], Post.prototype, "idx", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return school_1.School; }, function (school) { return school.posts; }),
        typeorm_1.JoinColumn({ name: "schoolIdx" }),
        __metadata("design:type", school_1.School)
    ], Post.prototype, "schoolIdx", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return admin_1.Admin; }, function (admin) { return admin.posts; }),
        typeorm_1.JoinColumn({ name: "adminIdx" }),
        __metadata("design:type", admin_1.Admin)
    ], Post.prototype, "adminIdx", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({ type: "varchar", length: 512 }),
        __metadata("design:type", String)
    ], Post.prototype, "subject", void 0);
    __decorate([
        typeorm_1.Column({ type: "text" }),
        __metadata("design:type", String)
    ], Post.prototype, "content", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Post.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Post.prototype, "updatedAt", void 0);
    Post = __decorate([
        typeorm_1.Entity("post", { schema: "newspeed" })
    ], Post);
    return Post;
}());
exports.Post = Post;
