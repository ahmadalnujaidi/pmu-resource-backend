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
exports.Approval = exports.ApprovalType = void 0;
const typeorm_1 = require("typeorm");
const professor_entity_1 = require("../../professors/entities/professor.entity");
const course_entity_1 = require("../../courses/entities/course.entity");
var ApprovalType;
(function (ApprovalType) {
    ApprovalType["NOTES"] = "notes";
    ApprovalType["ASSIGNMENTS"] = "assignments";
    ApprovalType["OLDS"] = "olds";
})(ApprovalType || (exports.ApprovalType = ApprovalType = {}));
let Approval = class Approval {
};
exports.Approval = Approval;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Approval.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ApprovalType,
    }),
    __metadata("design:type", String)
], Approval.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Approval.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Approval.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Approval.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => professor_entity_1.Professor, professor => professor.materials),
    (0, typeorm_1.JoinColumn)({ name: 'professor_id' }),
    __metadata("design:type", professor_entity_1.Professor)
], Approval.prototype, "professor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => course_entity_1.Course, course => course.materials),
    (0, typeorm_1.JoinColumn)({ name: 'course_id' }),
    __metadata("design:type", course_entity_1.Course)
], Approval.prototype, "course", void 0);
exports.Approval = Approval = __decorate([
    (0, typeorm_1.Entity)('approvals')
], Approval);
//# sourceMappingURL=approval.entity.js.map