import { Column, Entity } from 'typeorm';
import { CritterEntity } from '../base-critter/critter-entity';

@Entity('fish')
export class FishEntity extends CritterEntity {
    @Column()
    shadow: string;

    @Column()
    size: string;

    @Column({name: 'lighting_type'})
    lightingType: string;
}
