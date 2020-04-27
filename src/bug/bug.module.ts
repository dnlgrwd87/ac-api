import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BugController } from './bug.controller';
import { BugService } from './bug.service';
import { BugEntity } from './bug.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BugEntity])],
    controllers: [BugController],
    providers: [BugService]
})
export class BugModule {
}
