import { Controller, Get } from '@nestjs/common';
import { BagService } from './bag.service';

@Controller('bag')
export class BagController {
    constructor(private bagService: BagService) {}

    @Get()
    getAllFossils() {
        return this.bagService.getAll();
    }
}
