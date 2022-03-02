import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import express = require('express');
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const options = new DocumentBuilder()
    .setTitle('博客系统')
    .setDescription('开源博客')
    .setVersion('1.0')
    .addTag('共享世界')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);
  app.enableCors();

  app.use(cookieParser());
  console.log(join(__dirname, '/public'));
  app.use(express.static(join(__dirname, '/public')));
  await app.listen(3000);
}
bootstrap();
