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
exports.MaterialsController = void 0;
const common_1 = require("@nestjs/common");
const materials_service_1 = require("./materials.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const material_entity_1 = require("./entities/material.entity");
let MaterialsController = class MaterialsController {
    constructor(materialsService) {
        this.materialsService = materialsService;
    }
    async create(data, type, title, professorId, courseId) {
        return this.materialsService.create(data, type, title, professorId, courseId);
    }
    async findMaterialsByCourseAndProfessor(courseId, professorId) {
        return this.materialsService.findMaterialsByCourseAndProfessor(courseId, professorId);
    }
    async getMaterials(majorTitle, courseName, professorName, type) {
        return this.materialsService.findByMajorCourseProfessorAndType(majorTitle, courseName, professorName, type);
    }
};
exports.MaterialsController = MaterialsController;
__decorate([
    (0, common_1.Post)("materials"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)("data")),
    __param(1, (0, common_1.Body)("type", new common_1.ParseEnumPipe(material_entity_1.MaterialType))),
    __param(2, (0, common_1.Body)("title")),
    __param(3, (0, common_1.Body)("professor_id")),
    __param(4, (0, common_1.Body)("course_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], MaterialsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("course/:courseId/professor/:professorId"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)("courseId")),
    __param(1, (0, common_1.Param)("professorId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MaterialsController.prototype, "findMaterialsByCourseAndProfessor", null);
__decorate([
    (0, common_1.Get)(":majorTitle/:courseName/:professorName/:type"),
    __param(0, (0, common_1.Param)("majorTitle")),
    __param(1, (0, common_1.Param)("courseName")),
    __param(2, (0, common_1.Param)("professorName")),
    __param(3, (0, common_1.Param)("type", new common_1.ParseEnumPipe(material_entity_1.MaterialType))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], MaterialsController.prototype, "getMaterials", null);
exports.MaterialsController = MaterialsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [materials_service_1.MaterialsService])
], MaterialsController);
//# sourceMappingURL=materials.controller.js.map