import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArtController } from './art.controller';
import { ArtService } from './art.service';
import { ArtEntity } from './art.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ArtEntity])],
    controllers: [ArtController],
    providers: [ArtService]
})
export class ArtModule {}
