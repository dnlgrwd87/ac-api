import { AbstractEntity } from '../entities/abstract-entity';
import { Entity, Column } from 'typeorm';

@Entity('villager')
export class VillagerEntity extends AbstractEntity {
    @Column({ unique: true })
    name: string;

    @Column({ name: 'image_url', nullable: true })
    imageUrl: string;

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
