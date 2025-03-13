import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: process.env.NODE_ENV !== "production", // Auto-create database schema in development
  logging: process.env.NODE_ENV !== "production",
  ssl: {
    rejectUnauthorized: false, // This avoids CA validation error locally
  },
};
