import { Column, Entity } from 'typeorm';
import { CritterEntity } from '../critter-entity';

@Entity('bug')
export class BugEntity extends CritterEntity {
    @Column()
    weather: string;
}
