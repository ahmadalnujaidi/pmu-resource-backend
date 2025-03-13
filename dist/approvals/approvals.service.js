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
exports.ApprovalsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_config_1 = require("../config/s3.config");
const professor_entity_1 = require("../professors/entities/professor.entity");
const course_entity_1 = require("../courses/entities/course.entity");
const approval_entity_1 = require("./entities/approval.entity");
let ApprovalsService = class ApprovalsService {
    constructor(approvalsRepository, professorsRepository, coursesRepository) {
        this.approvalsRepository = approvalsRepository;
        this.professorsRepository = professorsRepository;
        this.coursesRepository = coursesRepository;
    }
    async create(file, type, title, professorId, courseId) {
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
        const key = `${Date.now()}-${file.originalname}`;
        const command = new client_s3_1.PutObjectCommand({
            Bucket: s3_config_1.s3Bucket,
            Key: key,
            Body: file.buffer,
            ContentType: "application/pdf",
        });
        await s3_config_1.s3Client.send(command);
        const url = `https://${s3_config_1.s3Bucket}.s3.amazonaws.com/${key}`;
        const approval = this.approvalsRepository.create({
            type,
            title,
            data: url,
            professor: { id: professorId },
            course: { id: courseId },
        });
        return this.approvalsRepository.save(approval);
    }
    async findByMajorCourseProfessorAndType(majorTitle, courseName, professorName, type) {
        const approvals = await this.approvalsRepository
            .createQueryBuilder("approval")
            .innerJoinAndSelect("approval.course", "course")
            .innerJoinAndSelect("approval.professor", "professor")
            .innerJoin("course.majors", "major")
            .where("major.title = :majorTitle", { majorTitle })
            .andWhere("course.courseName = :courseName", { courseName })
            .andWhere("professor.professorName = :professorName", { professorName })
            .andWhere("approval.type = :type", { type })
            .getMany();
        if (approvals.length === 0) {
            throw new common_1.NotFoundException(`No approvals found for major: ${majorTitle}, course: ${courseName}, professor: ${professorName}, type: ${type}`);
        }
        return approvals;
    }
    async findApprovalsByCourseAndProfessor(courseId, professorId) {
        const approvals = await this.approvalsRepository.find({
            where: {
                course: { id: courseId },
                professor: { id: professorId },
            },
            relations: ["course", "professor"],
        });
        if (approvals.length === 0) {
            throw new common_1.NotFoundException(`No approvals found for course ID ${courseId} and professor ID ${professorId}`);
        }
        return approvals;
    }
    async findAll() {
        return this.approvalsRepository.find({
            relations: ["professor", "course"],
        });
    }
    async delete(id) {
        return this.approvalsRepository.delete(id);
    }
};
exports.ApprovalsService = ApprovalsService;
exports.ApprovalsService = ApprovalsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(approval_entity_1.Approval)),
    __param(1, (0, typeorm_1.InjectRepository)(professor_entity_1.Professor)),
    __param(2, (0, typeorm_1.InjectRepository)(course_entity_1.Course)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ApprovalsService);
//# sourceMappingURL=approvals.service.js.map