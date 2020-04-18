import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './auth/auth.guard';

import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalGuards(new AuthGuard());
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
