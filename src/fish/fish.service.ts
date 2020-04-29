import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FishEntity } from './fish.entity';
import { FishDTO } from './fish.dto';

@Injectable()
export class FishService {
    constructor(
        @InjectRepository(FishEntity)
        private fishRepo: Repository<FishEntity>
    ) {
    }

    async getAll(): Promise<FishDTO[]> {
        const fish = await this.fishRepo.find({order: {id: 'ASC'}});
        return fish.map(this.mapToDTO);
    }

    async getById(id: number): Promise<FishDTO> {
        const fish = await this.fishRepo.findOneOrFail(id);
        return this.mapToDTO(fish);
    }

    private mapToDTO(fish: FishEntity): FishDTO {
        const {color1, color2, ...fishObj} = fish;
        const colors = [color1, color2];
        return {...fishObj, colors};
    }
}
