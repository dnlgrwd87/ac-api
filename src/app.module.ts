import { Module } from '@nestjs/common';
import { DatabaseConnectionService } from './databaseConnection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FossilModule } from './fossils/fossil.module';
import { VillagerModule } from './villagers/villager.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: DatabaseConnectionService
        }),
        FossilModule,
        VillagerModule
    ]
})
export class AppModule {}
