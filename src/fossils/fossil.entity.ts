import { AbstractEntity } from '../entities/abstract-entity';
import { Entity, Column } from 'typeorm';

@Entity('fossil')
export class FossilEntity extends AbstractEntity {
    @Column({ unique: true })
    name: string;

    @Column({ name: 'image_url', nullable: true })
    imageUrl: string;
    
    @Column({ name: 'sell_price' })
    sellPrice: number;
}
