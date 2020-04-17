import { Controller, Get } from '@nestjs/common';
import { VillagerService } from './villager.service';

@Controller('villagers')
export class VillagerController {
    constructor(private villagerService: VillagerService) {}

    @Get()
    getVillagers() {
        return this.villagerService.getAll();
    }
}
