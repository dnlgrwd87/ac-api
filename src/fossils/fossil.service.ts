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
        return fossils.map(this._mapToDTO);
    }

    async getById(id: number): Promise<FossilDTO> {
        const fossil = await this.fossilRepo.findOneOrFail(id);
        return this._mapToDTO(fossil);
    }

    _mapToDTO(fossil: FossilEntity): FossilDTO {
        const { createdAt, updatedAt, color1, color2, buyPrice, internalId, ...fossilObj } = fossil;
        const colors = [color1, color2];
        const updatedBuyPrice = buyPrice > 0 ? buyPrice : 'not for sale';

        return { ...fossilObj, buyPrice: updatedBuyPrice, colors };
    }
}
