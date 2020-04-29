import { AbstractEntity } from '../abstract-entity';
import { Column } from 'typeorm';

export class CritterEntity extends AbstractEntity {
    @Column({unique: true})
    name: string;

    @Column({name: 'critterpedia_image', nullable: true})
    critterpediaImage: string;

    @Column({name: 'furniture_image', nullable: true})
    furnitureImage: string;

    @Column({name: 'icon_image', nullable: true})
    iconImage: string;

    @Column({name: 'museum_description', nullable: true})
    museumDescription: string;

    @Column({name: 'catch_phrase', nullable: true})
    catchPhrase: string;

    @Column({name: 'sell_price'})
    sellPrice: number;

    @Column({name: 'obtained_from'})
    obtainedFrom: string;

    @Column()
    color1: string;

    @Column()
    color2: string;

    @Column()
    rarity: string;

    @Column({name: 'active_hours', type: 'jsonb'})
    activeHours: any;

    @Column({name: 'active_months', type: 'jsonb'})
    activeMonthsNorth: any;

    @Column({name: 'spreadsheet_id', unique: true, select: false})
    spreadsheetId: string;

}
