import { Controller, Get, Param } from '@nestjs/common';
import { BagService } from './bag.service';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BagDTO } from './bag.dto';

@ApiTags('Bags')
@Controller('bags')
export class BagController {
    constructor(private bagService: BagService) {
    }

    @Get()
    @ApiOkResponse({type: BagDTO})
    @ApiNotFoundResponse({description: 'No data was found'})
    getAllBags() {
        return this.bagService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({type: BagDTO})
    @ApiNotFoundResponse({description: 'No data was found'})
    getBagById(@Param('id') id: number) {
        return this.bagService.getById(id);
    }
}
