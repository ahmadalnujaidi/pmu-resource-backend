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
exports.MajorsController = void 0;
const common_1 = require("@nestjs/common");
const majors_service_1 = require("./majors.service");
const create_major_dto_1 = require("./dtos/create-major.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const admin_guard_1 = require("../auth/guards/admin.guard");
let MajorsController = class MajorsController {
    constructor(majorsService) {
        this.majorsService = majorsService;
    }
    async create(createMajorDto) {
        return this.majorsService.create(createMajorDto);
    }
    async findAll() {
        return this.majorsService.findAll();
    }
    async findOne(id) {
        return this.majorsService.findOne(id);
    }
    async findCoursesByMajorTitle(majorTitle) {
        return this.majorsService.findCoursesByMajorTitle(majorTitle);
    }
};
exports.MajorsController = MajorsController;
__decorate([
    (0, common_1.Post)('majors'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, admin_guard_1.AdminGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_major_dto_1.CreateMajorDto]),
    __metadata("design:returntype", Promise)
], MajorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('majors'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MajorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('majors/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MajorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':majorTitle/courses'),
    __param(0, (0, common_1.Param)('majorTitle')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MajorsController.prototype, "findCoursesByMajorTitle", null);
exports.MajorsController = MajorsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [majors_service_1.MajorsService])
], MajorsController);
//# sourceMappingURL=majors.controller.js.map