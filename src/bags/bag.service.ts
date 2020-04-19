import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BagEntity } from './bag.entity';
import { BagVariationEntity } from './bagVariation.entity';
import { BagDTO, BagVariationDTO } from './bag.dto';

@Injectable()
export class BagService {
    constructor(
        @InjectRepository(BagEntity)
        private bagRepo: Repository<BagEntity>
    ) {}

    async getAll(): Promise<BagDTO[]> {
        const bags = await this.bagRepo.find({ relations: ['variations'] });
        return bags.map(bag => this._mapToDTO(bag));
    }

    _mapToDTO(bag: BagEntity): BagDTO {
        const { buyPrice, variations, ...bagObj } = bag;
        const variationDTOs = variations.map(this._mapVariationToDTO);
        const updatedBuyPrice = buyPrice > 0 ? buyPrice : 'not for sale';
        
        return { ...bagObj, buyPrice: updatedBuyPrice, variations: variationDTOs };
    }

    _mapVariationToDTO(bagVariation: BagVariationEntity): BagVariationDTO {
        const { color1, color2, ...bagVariationObj } = bagVariation;
        const colors = [color1, color2];

        return { ...bagVariationObj, colors };
    }
}
