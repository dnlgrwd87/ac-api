import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtEntity } from './art.entity';
import { ArtDTO } from './art.dto';

@Injectable()
export class ArtService {
    constructor(
        @InjectRepository(ArtEntity)
        private artRepo: Repository<ArtEntity>
    ) {
    }

    async getAll(): Promise<ArtDTO[]> {
        const art = await this.artRepo.find({order: {id: 'ASC'}});
        return art.map(this.mapToDTO);
    }

    async getById(id: number): Promise<ArtDTO> {
        const art = await this.artRepo.findOneOrFail(id);
        return this.mapToDTO(art);
    }

    private mapToDTO(art: ArtEntity): ArtDTO {
        const updatedColors = art.colors.filter(color => color.toLowerCase() !== 'none');
        const updatedConcepts = art.hhaConcepts.filter(concept => concept.toLowerCase() !== 'none');
        art.hhaSeries = art.hhaSeries.toLowerCase() !== 'none' ? art.hhaSeries : null;
        art.hhaSet = art.hhaSet.toLowerCase() !== 'none' ? art.hhaSet : null;
        art.lightingType = art.lightingType.toLowerCase() !== 'no lighting' ? art.lightingType : null;
        art.speakerType = art.speakerType.toLowerCase() !== 'does not play music' ? art.speakerType : null;

        return {...art, colors: updatedColors, hhaConcepts: updatedConcepts};
    }
}
