import { Module } from '@nestjs/common';
import { DatabaseConnectionService } from './databaseConnection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FossilModule } from './fossils/fossil.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: DatabaseConnectionService
        }),
        FossilModule
    ]
})
export class AppModule {}
