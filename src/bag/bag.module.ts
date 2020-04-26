import { Module } from '@nestjs/common';
import { BagController } from './bag.controller';
import { BagService } from './bag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BagEntity } from './bag.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BagEntity])],

    controllers: [BagController],
    providers: [BagService]
})
export class BagModule {}
