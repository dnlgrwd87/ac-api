import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { FishService } from './fish.service';
import { FishEntity } from './fish.entity';

@ApiTags('Fish')
@Controller('fish')
export class FishController {
    constructor(private fishService: FishService) {
    }

    @Get()
    @ApiOkResponse({type: [FishEntity]})
    getAllBugs() {
        return this.fishService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({type: FishEntity})
    getBugbyId(@Param('id') id: number) {
        return this.fishService.getById(id);
    }
}
