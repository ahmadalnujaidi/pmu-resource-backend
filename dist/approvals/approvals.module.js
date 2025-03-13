"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const professor_entity_1 = require("../professors/entities/professor.entity");
const course_entity_1 = require("../courses/entities/course.entity");
const approval_entity_1 = require("./entities/approval.entity");
const approvals_service_1 = require("./approvals.service");
const approvals_controller_1 = require("./approvals.controller");
let ApprovalsModule = class ApprovalsModule {
};
exports.ApprovalsModule = ApprovalsModule;
exports.ApprovalsModule = ApprovalsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([approval_entity_1.Approval, professor_entity_1.Professor, course_entity_1.Course])],
        providers: [approvals_service_1.ApprovalsService],
        controllers: [approvals_controller_1.ApprovalsController],
        exports: [approvals_service_1.ApprovalsService],
    })
], ApprovalsModule);
//# sourceMappingURL=approvals.module.js.map