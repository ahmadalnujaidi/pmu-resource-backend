"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3Bucket = exports.s3Client = exports.s3Config = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const dotenv = require("dotenv");
dotenv.config();
exports.s3Config = {
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
};
exports.s3Client = new client_s3_1.S3Client(exports.s3Config);
exports.s3Bucket = process.env.S3_BUCKET || 'pmu-resources';
//# sourceMappingURL=s3.config.js.map