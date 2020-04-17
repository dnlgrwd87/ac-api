import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VillagerEntity } from './villager.entity';
import { VillagerDTO } from './villagerDTO';

@Injectable()
export class VillagerService {
    constructor(
        @InjectRepository(VillagerEntity)
        private villagerRepo: Repository<VillagerEntity>
    ) {}

    async getAll(): Promise<VillagerDTO[]> {
        const villagers = await this.villagerRepo.find();
        return this._mapToDTO(villagers);
    }

    _mapToDTO(villagers: VillagerEntity[]): VillagerDTO[] {
        const villagerDTOs: VillagerDTO[] = [];

        villagers.forEach(villager => {
            const { createdAt, updatedAt, style1, style2, ...villagerObj } = villager;
            const styles = style1 === style2 ? [style1] : [style1, style2];
            villagerDTOs.push({ ...villagerObj, styles });
        });

        return villagerDTOs;
    }
}
