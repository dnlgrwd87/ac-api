import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FossilController } from './fossil.controller';
import { FossilService } from './fossil.service';
import { FossilEntity } from './fossil.entity';

@Module({
    imports: [TypeOrmModule.forFeature([FossilEntity])],
    controllers: [FossilController],
    providers: [FossilService]
})
export class FossilModule {}
