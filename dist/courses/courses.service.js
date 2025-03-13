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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const course_entity_1 = require("./entities/course.entity");
const major_entity_1 = require("../majors/entities/major.entity");
let CoursesService = class CoursesService {
    constructor(coursesRepository, majorsRepository) {
        this.coursesRepository = coursesRepository;
        this.majorsRepository = majorsRepository;
    }
    async create(createCourseDto) {
        const { courseName, majorIds } = createCourseDto;
        const course = this.coursesRepository.create({
            courseName,
        });
        if (majorIds && majorIds.length > 0) {
            const majors = await this.majorsRepository.findByIds(majorIds);
            course.majors = majors;
        }
        return this.coursesRepository.save(course);
    }
    async findAll() {
        return this.coursesRepository.find({
            relations: ['majors', 'professors']
        });
    }
    async findOne(id) {
        const course = await this.coursesRepository.findOne({
            where: { id },
            relations: ['majors', 'professors']
        });
        if (!course) {
            throw new common_1.NotFoundException(`Course with ID ${id} not found`);
        }
        return course;
    }
    async findByName(courseName) {
        const course = await this.coursesRepository.findOne({
            where: { courseName },
            relations: ['majors', 'professors']
        });
        if (!course) {
            throw new common_1.NotFoundException(`Course with name ${courseName} not found`);
        }
        return course;
    }
    async update(id, updateCourseDto) {
        const { majorIds } = updateCourseDto;
        const course = await this.findOne(id);
        course.majors = await this.majorsRepository.findByIds(majorIds);
        return this.coursesRepository.save(course);
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __param(1, (0, typeorm_1.InjectRepository)(major_entity_1.Major)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CoursesService);
//# sourceMappingURL=courses.service.js.map