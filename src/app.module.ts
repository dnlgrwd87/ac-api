import { Module } from '@nestjs/common';
import { DatabaseConnectionService } from './database-connection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FossilModule } from './fossil/fossil.module';
import { VillagerModule } from './villager/villager.module';
import { BagModule } from './bag/bag.module';

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
