import { Module } from '@nestjs/common';
import { FishService } from './fish.service';
import { FishController } from './fish.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FishEntity } from './fish.entity';

@Module({
    imports: [TypeOrmModule.forFeature([FishEntity])],
    providers: [FishService],
    controllers: [FishController]
})
export class FishModule {
}
