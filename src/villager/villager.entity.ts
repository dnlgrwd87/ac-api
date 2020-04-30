import { AbstractEntity } from '../abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity('villager')
export class VillagerEntity extends AbstractEntity {
    @Column({unique: true})
    name: string;

    @Column({name: 'icon_image', nullable: true})
    iconImage: string;

    @Column({name: 'house_image', nullable: true})
    houseImage: string;

    @Column()
    species: string;

    @Column()
    gender: string;

    @Column()
    personality: string;

    @Column()
    birthday: string;

    @Column()
    catchphrase: string;

    @Column()
    style1: string;

    @Column()
    style2: string;

    @Column()
    color1: string;

    @Column()
    color2: string;

    @Column({name: 'spreadsheet_id', unique: true, select: false})
    spreadsheetId: string;
}
