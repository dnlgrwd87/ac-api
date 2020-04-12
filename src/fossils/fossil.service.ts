import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FossilEntity } from '../fossils/fossil.entity';
import { FossilDTO } from './fossilDTO';

@Injectable()
export class FossilService {
    constructor(
        @InjectRepository(FossilEntity)
        private fossilRepo: Repository<FossilEntity>
    ) {}

    async getAll(): Promise<FossilDTO[]> {
        const fossils = await this.fossilRepo.find();
        return this._mapToDTO(fossils);
    }

    _mapToDTO(fossils: FossilEntity[]): FossilDTO[] {
        const fossilDTOs: FossilDTO[] = [];

        fossils.forEach(f => {
            const { id, name, imageUrl, sellPrice } = f;
            fossilDTOs.push({ id, name, imageUrl, sellPrice });
        });

        return fossilDTOs;
    }
}
