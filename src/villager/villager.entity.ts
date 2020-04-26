import { AbstractEntity } from '../abstract-entity';
import { Entity, Column } from 'typeorm';

@Entity('villager')
export class VillagerEntity extends AbstractEntity {
    @Column({ unique: true })
    name: string;

    @Column({ nullable: true })
    image: string;

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

    @Column({ name: 'spreadsheet_id', unique: true, select: false })
    spreadsheetId: string;
}
