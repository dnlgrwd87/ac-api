import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BagEntity } from './bag.entity';
import { BagDTO, BagVariationDTO } from './bag.dto';

@Injectable()
export class BagService {
    constructor(
        @InjectRepository(BagEntity)
        private bagRepo: Repository<BagEntity>
    ) {}

    async getAll(): Promise<BagEntity[]> {
        return this.bagRepo.find();
    }
}
