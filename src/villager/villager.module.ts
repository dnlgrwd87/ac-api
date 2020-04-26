import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VillagerController } from './villager.controller';
import { VillagerService } from './villager.service';
import { VillagerEntity } from './villager.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VillagerEntity])],
    controllers: [VillagerController],
    providers: [VillagerService]
})
export class VillagerModule {}
