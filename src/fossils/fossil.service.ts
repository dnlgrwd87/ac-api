import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FossilEntity } from './fossil.entity';
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

        fossils.forEach(fossil => {
            const updatedBuyPrice = fossil.buyPrice > 0 ? fossil.buyPrice : 'not for sale';
            const { createdAt, updatedAt, color1, color2, buyPrice, ...fossilObj } = fossil;
            const colors = color1 === color2 ? [color1] : [color1, color2];

            fossilDTOs.push({ ...fossilObj, colors, buyPrice: updatedBuyPrice });
        });

        return fossilDTOs;
    }
}
