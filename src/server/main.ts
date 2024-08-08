import {NestFactory} from '@nestjs/core';
import {API, AppModule} from './app.module';
import * as bodyParser from 'body-parser';
import {Logger, ValidationPipe} from '@nestjs/common';
import * as actuator from 'express-actuator';
import helmet from "helmet";

async function bootstrap(): Promise<void> {

    // Init nest app
    const app = await NestFactory.create(AppModule, {logger: ['error', 'warn', 'debug', 'verbose', 'log']});

    app.useGlobalPipes(new ValidationPipe());
    app.use(helmet())

    // Endpoint config
    app.use(bodyParser.json({limit: '5mb'}));
    app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
    app.use(bodyParser.raw({limit: '5mb'}));
    app.use(actuator());
    app.setGlobalPrefix(API);

    // Run app
    await app.listen(process.env.PORT || 8080);

    Logger.log(await app.getUrl(), 'App URL');
}

bootstrap()
    .then(() => Logger.log('App started'));
