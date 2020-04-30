import { Controller, Get, Param } from '@nestjs/common';
import { FossilService } from './fossil.service';
import { FossilDTO } from './fossil.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Fossils')
@Controller('fossils')
export class FossilController {
    constructor(private fossilService: FossilService) {
    }

    @Get()
    @ApiOkResponse({ type: [FossilDTO] })
    @ApiNotFoundResponse({description: 'No data was found'})
    getAllFossils() {
        return this.fossilService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: FossilDTO })
    @ApiNotFoundResponse({description: 'No data was found'})
    getFossilById(@Param('id') id: number) {
        return this.fossilService.getById(id);
    }
}
