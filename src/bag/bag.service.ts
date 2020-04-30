import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BagEntity } from './bag.entity';
import { BagDTO } from './bag.dto';

@Injectable()
export class BagService {
    constructor(
        @InjectRepository(BagEntity)
        private bagRepo: Repository<BagEntity>
    ) {}

    async getAll(): Promise<BagDTO[]> {
        const bags = await this.bagRepo.find({ order: { id: 'ASC' } });
        return bags.map(this.mapToDTO);
    }

    async getById(id: number): Promise<BagDTO> {
        const bag = await this.bagRepo.findOneOrFail(id);
        return this.mapToDTO(bag);
    }

    private mapToDTO(bag: BagEntity): BagDTO {
        const {color1, color2, ...bagObj} = bag;
        const colors = [color1, color2];
        return {...bagObj, colors};
    }
}
