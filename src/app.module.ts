import { Module } from '@nestjs/common';
import { DatabaseConnectionService } from './databaseConnection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FossilModule } from './fossils/fossil.module';
import { VillagerModule } from './villagers/villager.module';
import { BagModule } from './bags/bag.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: DatabaseConnectionService
        }),
        FossilModule,
        VillagerModule,
        BagModule
    ]
})
export class AppModule {}
