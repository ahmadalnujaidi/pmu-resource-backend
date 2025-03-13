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
exports.MaterialsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const material_entity_1 = require("./entities/material.entity");
const professor_entity_1 = require("../professors/entities/professor.entity");
const course_entity_1 = require("../courses/entities/course.entity");
let MaterialsService = class MaterialsService {
    constructor(materialsRepository, professorsRepository, coursesRepository) {
        this.materialsRepository = materialsRepository;
        this.professorsRepository = professorsRepository;
        this.coursesRepository = coursesRepository;
    }
    async create(data, type, title, professorId, courseId) {
        const professor = await this.professorsRepository.findOne({
            where: { id: professorId },
        });
        if (!professor) {
            throw new common_1.NotFoundException(`Professor with ID ${professorId} not found`);
        }
        const course = await this.coursesRepository.findOne({
            where: { id: courseId },
        });
        if (!course) {
            throw new common_1.NotFoundException(`Course with ID ${courseId} not found`);
        }
        const material = this.materialsRepository.create({
            type,
            title,
            data,
            professor: { id: professorId },
            course: { id: courseId },
        });
        return this.materialsRepository.save(material);
    }
    async findAll() {
        return this.materialsRepository.find({
            relations: ["professor", "course"],
        });
    }
    async findByMajorCourseProfessorAndType(majorTitle, courseName, professorName, type) {
        const materials = await this.materialsRepository
            .createQueryBuilder("material")
            .innerJoinAndSelect("material.course", "course")
            .innerJoinAndSelect("material.professor", "professor")
            .innerJoin("course.majors", "major")
            .where("major.title = :majorTitle", { majorTitle })
            .andWhere("course.courseName = :courseName", { courseName })
            .andWhere("professor.professorName = :professorName", { professorName })
            .andWhere("material.type = :type", { type })
            .getMany();
        if (materials.length === 0) {
            throw new common_1.NotFoundException(`No materials found for major: ${majorTitle}, course: ${courseName}, professor: ${professorName}, type: ${type}`);
        }
        return materials;
    }
    async findMaterialsByCourseAndProfessor(courseId, professorId) {
        const materials = await this.materialsRepository.find({
            where: {
                course: { id: courseId },
                professor: { id: professorId },
            },
            relations: ["course", "professor"],
        });
        if (materials.length === 0) {
            throw new common_1.NotFoundException(`No materials found for course ID ${courseId} and professor ID ${professorId}`);
        }
        return materials;
    }
};
exports.MaterialsService = MaterialsService;
exports.MaterialsService = MaterialsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(material_entity_1.Material)),
    __param(1, (0, typeorm_1.InjectRepository)(professor_entity_1.Professor)),
    __param(2, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MaterialsService);
//# sourceMappingURL=materials.service.js.map