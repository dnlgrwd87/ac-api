import { AbstractEntity } from '../abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity('art')
export class ArtEntity extends AbstractEntity {
    @Column()
    name: string;

    @Column({nullable: true})
    image: string;

    @Column()
    artist: string;

    @Column()
    genuine: boolean;

    @Column({name: 'real_artwork_title'})
    realArtworkTitle: string;

    @Column({name: 'high_res_texture', nullable: true})
    highResTexture: string;

    @Column({name: 'museum_description', nullable: true})
    museumDescription: string;

    @Column({name: 'buy_price'})
    buyPrice: number;

    @Column({name: 'sell_price'})
    sellPrice: number;

    @Column({name: 'hha_concepts', type: 'jsonb'})
    hhaConcepts: string[];

    @Column({name: 'colors', type: 'jsonb'})
    colors: string[];

    @Column()
    category: string;

    @Column()
    tag: string;

    @Column({name: 'hha_series'})
    hhaSeries: string;

    @Column({name: 'hha_set'})
    hhaSet: string;

    @Column()
    interactive: boolean;

    @Column()
    size: string;

    @Column()
    source: string;

    @Column({name: 'source_notes'})
    sourceNotes: string;

    @Column({name: 'speaker_type'})
    speakerType: string;

    @Column({name: 'lighting_type'})
    lightingType: string;

    @Column({name: 'in_catalog'})
    inCatalog: boolean;

    @Column({name: 'can_reorder'})
    canReorder: boolean;

    @Column({name: 'spreadsheet_id', unique: true, select: false})
    spreadsheetId: string;
}
