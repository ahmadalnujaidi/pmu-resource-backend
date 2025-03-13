"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const majors_module_1 = require("./majors/majors.module");
const courses_module_1 = require("./courses/courses.module");
const professors_module_1 = require("./professors/professors.module");
const materials_module_1 = require("./materials/materials.module");
const database_config_1 = require("./config/database.config");
const suggestions_module_1 = require("./suggestions/suggestions.module");
const approvals_module_1 = require("./approvals/approvals.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(database_config_1.databaseConfig),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            majors_module_1.MajorsModule,
            courses_module_1.CoursesModule,
            professors_module_1.ProfessorsModule,
            materials_module_1.MaterialsModule,
            suggestions_module_1.SuggestionsModule,
            approvals_module_1.ApprovalsModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map