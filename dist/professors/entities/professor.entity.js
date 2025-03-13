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
exports.Professor = void 0;
const typeorm_1 = require("typeorm");
const course_entity_1 = require("../../courses/entities/course.entity");
const material_entity_1 = require("../../materials/entities/material.entity");
let Professor = class Professor {
};
exports.Professor = Professor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Professor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'professor_name' }),
    __metadata("design:type", String)
], Professor.prototype, "professorName", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => course_entity_1.Course, course => course.professors),
    __metadata("design:type", Array)
], Professor.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => material_entity_1.Material, material => material.professor),
    __metadata("design:type", Array)
], Professor.prototype, "materials", void 0);
exports.Professor = Professor = __decorate([
    (0, typeorm_1.Entity)('professors')
], Professor);
//# sourceMappingURL=professor.entity.js.map