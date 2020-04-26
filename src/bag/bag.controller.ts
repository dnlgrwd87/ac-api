import { Controller, Get } from '@nestjs/common';
import { BagService } from './bag.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BagDTO } from './bag.dto';

@ApiTags('Bags')
@Controller('bags')
export class BagController {
    constructor(private bagService: BagService) {
    }

    @Get()
    @ApiOkResponse({type: BagDTO})
    getAllBags() {
        return this.bagService.getAll();
    }
}
