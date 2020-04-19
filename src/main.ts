import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './auth/auth.guard';

import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalGuards(new AuthGuard());
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Listening on port ${port}`);
}
bootstrap();
