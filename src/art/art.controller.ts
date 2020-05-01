import { Controller, Get, Param } from '@nestjs/common';
import { ArtService } from './art.service';
import { ArtDTO } from './art.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Art')
@Controller('art')
export class ArtController {
    constructor(private artService: ArtService) {
    }

    @Get()
    @ApiOkResponse({ type: [ArtDTO] })
    @ApiNotFoundResponse({description: 'No data was found'})
    getAllFossils() {
        return this.artService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: ArtDTO })
    @ApiNotFoundResponse({description: 'No data was found'})
    getFossilById(@Param('id') id: number) {
        return this.artService.getById(id);
    }
}
