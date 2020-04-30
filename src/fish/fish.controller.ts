import { Controller, Get, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { FishService } from './fish.service';
import { FishDTO } from './fish.dto';

@ApiTags('Fish')
@Controller('fish')
export class FishController {
    constructor(private fishService: FishService) {
    }

    @Get()
    @ApiOkResponse({type: [FishDTO]})
    @ApiNotFoundResponse({description: 'No data was found'})
    getAllBugs() {
        return this.fishService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({type: FishDTO})
    @ApiNotFoundResponse({description: 'No data was found'})
    getBugbyId(@Param('id') id: number) {
        return this.fishService.getById(id);
    }
}
