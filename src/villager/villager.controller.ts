import { Controller, Get, Param } from '@nestjs/common';
import { VillagerService } from './villager.service';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { VillagerDTO } from './villager.dto';

@ApiTags('Villagers')
@Controller('villagers')
export class VillagerController {
    constructor(private villagerService: VillagerService) {
    }

    @Get()
    @ApiOkResponse({type: [VillagerDTO]})
    @ApiNotFoundResponse({description: 'No data was found'})
    getAllVillagers() {
        return this.villagerService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({type: VillagerDTO})
    @ApiNotFoundResponse({description: 'No data was found'})
    getVillagerById(@Param('id') id: number) {
        return this.villagerService.getById(id);
    }
}
