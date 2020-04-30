import { Controller, Get, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { BugService } from './bug.service';
import { BugDTO } from './bug.dto';

@ApiTags('Bugs')
@Controller('bugs')
export class BugController {
    constructor(private bugService: BugService) {
    }

    @Get()
    @ApiOkResponse({type: [BugDTO]})
    @ApiNotFoundResponse({description: 'No data was found'})
    getAllBugs() {
        return this.bugService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({type: BugDTO})
    @ApiNotFoundResponse({description: 'No data was found'})
    getBugbyId(@Param('id') id: number) {
        return this.bugService.getById(id);
    }
}
