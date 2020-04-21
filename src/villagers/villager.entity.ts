import { AbstractEntity } from '../abstractEntity';
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
}
