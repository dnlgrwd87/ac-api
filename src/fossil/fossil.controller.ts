import { Controller, Get, Param } from '@nestjs/common';
import { FossilService } from './fossil.service';
import { FossilDTO } from './fossil.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Fossils')
@Controller('fossils')
export class FossilController {
    constructor(private fossilService: FossilService) {
    }

    @Get()
    @ApiOkResponse({ type: [FossilDTO] })
    getAllFossils() {
        return this.fossilService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: FossilDTO })
    getFossilById(@Param('id') id: number) {
        return this.fossilService.getById(id);
    }
}
