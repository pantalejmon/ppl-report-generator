import {NestFactory} from '@nestjs/core';
import {API, AppModule} from './app.module';
import * as bodyParser from 'body-parser';
import {ValidationPipe} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as version from "project-version"
import * as actuator from "express-actuator";

async function bootstrap(): Promise<void> {

    // Init nest app
    const app = await NestFactory.create(AppModule, {logger: ['error', 'warn', 'debug', 'verbose', 'log']});

    app.useGlobalPipes(new ValidationPipe());

    // Endpoint config
    app.use(bodyParser.json({limit: '5mb'}));
    app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
    app.use(bodyParser.raw({limit: '5mb'}));
    app.use(actuator());
    app.setGlobalPrefix(API);

    // Swagger config
    const config = new DocumentBuilder()
        .setTitle('PPL Report Generator')
        .setDescription('Tool for generating PDF file from JIRA XLS Report')
        .setVersion(version)
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    // Run app
    await app.listen(process.env.PORT || 8080);
}

bootstrap()
    .then(() => console.log('[INFO] Backend started'));
