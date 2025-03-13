"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.databaseConfig = {
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    synchronize: process.env.NODE_ENV !== "production",
    logging: process.env.NODE_ENV !== "production",
    ssl: {
        rejectUnauthorized: false,
    },
};
//# sourceMappingURL=database.config.js.map