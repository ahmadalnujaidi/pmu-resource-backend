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
exports.Course = void 0;
const typeorm_1 = require("typeorm");
const major_entity_1 = require("../../majors/entities/major.entity");
const professor_entity_1 = require("../../professors/entities/professor.entity");
const material_entity_1 = require("../../materials/entities/material.entity");
let Course = class Course {
};
exports.Course = Course;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Course.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'course_name' }),
    __metadata("design:type", String)
], Course.prototype, "courseName", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => major_entity_1.Major, major => major.courses),
    __metadata("design:type", Array)
], Course.prototype, "majors", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => professor_entity_1.Professor, professor => professor.courses),
    (0, typeorm_1.JoinTable)({
        name: 'course_professor',
        joinColumn: {
            name: 'course_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'professor_id',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], Course.prototype, "professors", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => material_entity_1.Material, material => material.course),
    __metadata("design:type", Array)
], Course.prototype, "materials", void 0);
exports.Course = Course = __decorate([
    (0, typeorm_1.Entity)('courses')
], Course);
//# sourceMappingURL=course.entity.js.map