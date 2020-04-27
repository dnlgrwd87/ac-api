import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BugEntity } from './bug.entity';

@Injectable()
export class BugService {
    constructor(
        @InjectRepository(BugEntity)
        private bugRepo: Repository<BugEntity>
    ) {
    }

    async getAll(): Promise<BugEntity[]> {
        return this.bugRepo.find({order: {id: 'ASC'}});
    }

    async getById(id: number): Promise<BugEntity> {
        return this.bugRepo.findOneOrFail(id);
    }
}
