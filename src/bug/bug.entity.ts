import { AbstractEntity } from '../abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity('bug')
export class BugEntity extends AbstractEntity {
    @Column({unique: true})
    name: string;

    @Column({name: 'critterpedia_image', nullable: true})
    critterpediaImage: string;

    @Column({name: 'furniture_image', nullable: true})
    furnitureImage: string;

    @Column({name: 'icon_image', nullable: true})
    iconImage: string;

    @Column({name: 'sell_price'})
    sellPrice: number;

    @Column({name: 'obtained_from'})
    obtainedFrom: string;

    @Column()
    weather: string;

    @Column()
    color1: string;

    @Column()
    color2: string;

    @Column({nullable: true})
    description: string;

    @Column({name: 'active_hours', type: 'jsonb'})
    activeHours: any;

    @Column({name: 'active_months', type: 'jsonb'})
    activeMonthsNorth: any;

    @Column({name: 'spreadsheet_id', unique: true, select: false})
    spreadsheetId: string;

}
