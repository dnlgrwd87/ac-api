import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConnectionService } from './databaseConnection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FossilModule } from './fossils/fossil.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: DatabaseConnectionService
        }),
        FossilModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
