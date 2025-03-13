"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const professors_service_1 = require("./professors.service");
const professors_controller_1 = require("./professors.controller");
const professor_entity_1 = require("./entities/professor.entity");
const course_entity_1 = require("../courses/entities/course.entity");
let ProfessorsModule = class ProfessorsModule {
};
exports.ProfessorsModule = ProfessorsModule;
exports.ProfessorsModule = ProfessorsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([professor_entity_1.Professor, course_entity_1.Course])],
        providers: [professors_service_1.ProfessorsService],
        controllers: [professors_controller_1.ProfessorsController],
        exports: [professors_service_1.ProfessorsService],
    })
], ProfessorsModule);
//# sourceMappingURL=professors.module.js.map