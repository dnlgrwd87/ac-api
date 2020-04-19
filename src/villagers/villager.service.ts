import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VillagerEntity } from './villager.entity';
import { VillagerDTO } from './villager.dto';

@Injectable()
export class VillagerService {
    constructor(
        @InjectRepository(VillagerEntity)
        private villagerRepo: Repository<VillagerEntity>
    ) {}

    async getAll(): Promise<VillagerDTO[]> {
        const villagers = await this.villagerRepo.find();
        return villagers.map(this._mapToDTO);
    }

    async getById(id: number): Promise<VillagerDTO> {
        const villager = await this.villagerRepo.findOneOrFail(id);
        return this._mapToDTO(villager);
    }

    _mapToDTO(villager: VillagerEntity): VillagerDTO {
        const { style1, style2, ...villagerObj } = villager;
        const styles = [style1, style2];

        return { ...villagerObj, styles };
    }
}
