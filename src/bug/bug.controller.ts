import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { BugService } from './bug.service';
import { BugEntity } from './bug.entity';

@ApiTags('Bugs')
@Controller('bugs')
export class BugController {
    constructor(private bugService: BugService) {
    }

    @Get()
    @ApiOkResponse({type: [BugEntity]})
    getAllBugs() {
        return this.bugService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({type: BugEntity})
    getBugbyId(@Param('id') id: number) {
        return this.bugService.getById(id);
    }
}
