import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BugEntity } from './bug.entity';
import { BugDTO } from './bug.dto';

@Injectable()
export class BugService {
    constructor(
        @InjectRepository(BugEntity)
        private bugRepo: Repository<BugEntity>
    ) {
    }

    async getAll(): Promise<BugDTO[]> {
        const bugs = await this.bugRepo.find({order: {id: 'ASC'}});
        return bugs.map(this.mapToDTO);
    }

    async getById(id: number): Promise<BugDTO> {
        const bug = await this.bugRepo.findOneOrFail(id);
        return this.mapToDTO(bug);
    }

    private mapToDTO(bug: BugEntity): BugDTO {
        const {color1, color2, ...bugObj} = bug;
        const colors = [color1, color2];
        return {...bugObj, colors};
    }
}
