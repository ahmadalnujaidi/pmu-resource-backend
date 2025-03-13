import { S3Client } from '@aws-sdk/client-s3';
export declare const s3Config: {
    region: string;
    credentials: {
        accessKeyId: string;
        secretAccessKey: string;
    };
};
export declare const s3Client: S3Client;
export declare const s3Bucket: string;
