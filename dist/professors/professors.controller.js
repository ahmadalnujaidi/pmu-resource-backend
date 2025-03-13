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
exports.ProfessorsController = void 0;
const common_1 = require("@nestjs/common");
const professors_service_1 = require("./professors.service");
const create_professor_dto_1 = require("./dtos/create-professor.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
const update_professor_dto_1 = require("./dtos/update-professor.dto");
let ProfessorsController = class ProfessorsController {
    constructor(professorsService) {
        this.professorsService = professorsService;
    }
    async create(createProfessorDto) {
        return this.professorsService.create(createProfessorDto);
    }
    async findAll() {
        return this.professorsService.findAll();
    }
    async findOne(id) {
        return this.professorsService.findOne(id);
    }
    async update(id, updateProfessorDto) {
        return this.professorsService.update(id, updateProfessorDto);
    }
};
exports.ProfessorsController = ProfessorsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_professor_dto_1.CreateProfessorDto]),
    __metadata("design:returntype", Promise)
], ProfessorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfessorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfessorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_professor_dto_1.UpdateProfessorDto]),
    __metadata("design:returntype", Promise)
], ProfessorsController.prototype, "update", null);
exports.ProfessorsController = ProfessorsController = __decorate([
    (0, common_1.Controller)('professors'),
    __metadata("design:paramtypes", [professors_service_1.ProfessorsService])
], ProfessorsController);
//# sourceMappingURL=professors.controller.js.map