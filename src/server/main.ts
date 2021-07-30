import {NestFactory} from '@nestjs/core';
import {API, AppModule} from './app.module';
import * as bodyParser from 'body-parser';
import {ValidationPipe} from '@nestjs/common';

async function bootstrap(): Promise<void> {

    // Init nest app
    const app = await NestFactory.create(AppModule, {logger: ['error', 'warn', 'debug', 'verbose', 'log']});

    app.useGlobalPipes(new ValidationPipe());

    // Endpoint config
    app.use(bodyParser.json({limit: '5mb'}));
    app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
    app.use(bodyParser.raw({limit: '5mb'}));
    app.setGlobalPrefix(API);

    // Run app
    await app.listen(process.env.PORT || 8080);
}

bootstrap()
    .then(() => console.log('[INFO] Backend started'));
