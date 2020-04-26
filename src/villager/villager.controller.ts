import { Controller, Get, Param } from '@nestjs/common';
import { VillagerService } from './villager.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { VillagerDTO } from './villager.dto';

@ApiTags('Villagers')
@Controller('villagers')
export class VillagerController {
    constructor(private villagerService: VillagerService) {
    }

    @Get()
    @ApiOkResponse({type: [VillagerDTO]})
    getAllVillagers() {
        return this.villagerService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({type: VillagerDTO})
    getVillagerById(@Param('id') id: number) {
        return this.villagerService.getById(id);
    }
}
