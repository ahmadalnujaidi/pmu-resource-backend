import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Set global prefix for all routes
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: '*',
    credentials: true,
  });
  
  // Enable validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties that do not have any decorators
      transform: true, // Transform payloads to DTO instances
      forbidNonWhitelisted: true, // Throw errors if non-whitelisted properties are present
    }),
  );
  
  const port = process.env.PORT || 3002; // Use port 3002 as default
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap(); 