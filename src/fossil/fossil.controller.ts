import { Controller, Get, Param } from '@nestjs/common';
import { FossilService } from './fossil.service';

@Controller('fossil')
export class FossilController {
    constructor(private fossilService: FossilService) {}

    @Get()
    getAllFossils() {
        return this.fossilService.getAll();
    }

    @Get(':id')
    getFossilById(@Param('id') id: number) {
        return this.fossilService.getById(id);
    }
}
