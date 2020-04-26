import { Controller, Get, Param } from '@nestjs/common';
import { VillagerService } from './villager.service';

@Controller('villager')
export class VillagerController {
    constructor(private villagerService: VillagerService) {}

    @Get()
    getAllVillagers() {
        return this.villagerService.getAll();
    }

    @Get(':id')
    getVillagerById(@Param('id') id: number) {
        return this.villagerService.getById(id);
    }
}
