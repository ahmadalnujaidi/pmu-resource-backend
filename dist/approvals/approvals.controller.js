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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const approvals_service_1 = require("./approvals.service");
const approval_entity_1 = require("./entities/approval.entity");
let ApprovalsController = class ApprovalsController {
    constructor(approvalsService) {
        this.approvalsService = approvalsService;
    }
    async create(file, type, title, professorId, courseId) {
        return this.approvalsService.create(file, type, title, professorId, courseId);
    }
    async findApprovalsByCourseAndProfessor(courseId, professorId) {
        return this.approvalsService.findApprovalsByCourseAndProfessor(courseId, professorId);
    }
    async getApprovals(majorTitle, courseName, professorName, type) {
        return this.approvalsService.findByMajorCourseProfessorAndType(majorTitle, courseName, professorName, type);
    }
    async findAll() {
        return this.approvalsService.findAll();
    }
    delete(id) {
        return this.approvalsService.delete(id);
    }
};
exports.ApprovalsController = ApprovalsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", { limits: { fileSize: 80 * 1024 * 1024 } })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)("type", new common_1.ParseEnumPipe(approval_entity_1.ApprovalType))),
    __param(2, (0, common_1.Body)("title")),
    __param(3, (0, common_1.Body)("professor_id")),
    __param(4, (0, common_1.Body)("course_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String]),
    __metadata("design:returntype", Promise)
], ApprovalsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("course/:courseId/professor/:professorId"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)("courseId")),
    __param(1, (0, common_1.Param)("professorId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ApprovalsController.prototype, "findApprovalsByCourseAndProfessor", null);
__decorate([
    (0, common_1.Get)(":majorTitle/:courseName/:professorName/:type"),
    __param(0, (0, common_1.Param)("majorTitle")),
    __param(1, (0, common_1.Param)("courseName")),
    __param(2, (0, common_1.Param)("professorName")),
    __param(3, (0, common_1.Param)("type", new common_1.ParseEnumPipe(approval_entity_1.ApprovalType))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], ApprovalsController.prototype, "getApprovals", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApprovalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApprovalsController.prototype, "delete", null);
exports.ApprovalsController = ApprovalsController = __decorate([
    (0, common_1.Controller)("approvals"),
    __metadata("design:paramtypes", [approvals_service_1.ApprovalsService])
], ApprovalsController);
//# sourceMappingURL=approvals.controller.js.map