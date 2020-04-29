import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { BugService } from './bug.service';
import { BugDTO } from './bug.dto';

@ApiTags('Bugs')
@Controller('bugs')
export class BugController {
    constructor(private bugService: BugService) {
    }

    @Get()
    @ApiOkResponse({type: [BugDTO]})
    getAllBugs() {
        return this.bugService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({type: BugDTO})
    getBugbyId(@Param('id') id: number) {
        return this.bugService.getById(id);
    }
}
