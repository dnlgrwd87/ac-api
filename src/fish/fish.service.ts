import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FishEntity } from './fish.entity';

@Injectable()
export class FishService {
    constructor(
        @InjectRepository(FishEntity)
        private fishRepo: Repository<FishEntity>
    ) {
    }

    async getAll(): Promise<FishEntity[]> {
        return this.fishRepo.find({order: {id: 'ASC'}});
    }

    async getById(id: number): Promise<FishEntity> {
        return this.fishRepo.findOneOrFail(id);
    }
}
