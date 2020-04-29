import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FossilEntity } from './fossil.entity';
import { FossilDTO } from './fossil.dto';

@Injectable()
export class FossilService {
    constructor(
        @InjectRepository(FossilEntity)
        private fossilRepo: Repository<FossilEntity>
    ) {}

    async getAll(): Promise<FossilDTO[]> {
        const fossils = await this.fossilRepo.find({order: {id: 'ASC'}});
        return fossils.map(this.mapToDTO);
    }

    async getById(id: number): Promise<FossilDTO> {
        const fossil = await this.fossilRepo.findOneOrFail(id);
        return this.mapToDTO(fossil);
    }

    private mapToDTO(fossil: FossilEntity): FossilDTO {
        const {color1, color2, buyPrice, ...fossilObj} = fossil;
        const colors = [color1, color2];
        const updatedBuyPrice = buyPrice > 0 ? buyPrice : null;

        return {...fossilObj, buyPrice: updatedBuyPrice, colors};
    }
}
