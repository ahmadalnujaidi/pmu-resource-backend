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
exports.CreateMaterialDto = void 0;
const class_validator_1 = require("class-validator");
const material_entity_1 = require("../entities/material.entity");
class CreateMaterialDto {
}
exports.CreateMaterialDto = CreateMaterialDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Type is required" }),
    (0, class_validator_1.IsEnum)(material_entity_1.MaterialType, {
        message: "Type must be one of: notes, assignments, olds",
    }),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Title is required" }),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Professor ID is required" }),
    (0, class_validator_1.IsUUID)(4, { message: "Professor ID must be a valid UUID" }),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "professorId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Course ID is required" }),
    (0, class_validator_1.IsUUID)(4, { message: "Course ID must be a valid UUID" }),
    __metadata("design:type", String)
], CreateMaterialDto.prototype, "courseId", void 0);
//# sourceMappingURL=create-material.dto.js.map