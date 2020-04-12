import { Controller, Get } from '@nestjs/common';
import { FossilService } from './fossil.service';

@Controller('fossils')
export class FossilController {
    constructor(private fossilService: FossilService) {}

    @Get()
    getFossils() {
        return this.fossilService.getAll();
    }
}
