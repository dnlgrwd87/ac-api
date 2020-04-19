import { AbstractEntity } from '../abstractEntity';
import { Entity, Column } from 'typeorm';

@Entity('fossil')
export class FossilEntity extends AbstractEntity {
    @Column({ unique: true })
    name: string;

    @Column({ name: 'image_url', nullable: true })
    imageUrl: string;

    @Column({ name: 'buy_price' })
    buyPrice: number;

    @Column({ name: 'sell_price' })
    sellPrice: number;

    @Column()
    color1: string;

    @Column()
    color2: string;

    @Column()
    size: string;

    @Column()
    source: string;

    @Column()
    interactive: boolean;

    @Column({ name: 'in_catalog' })
    inCatalog: boolean;

    @Column({ name: 'can_reorder' })
    canReorder: boolean;

    @Column({ name: 'internal_id' })
    internalId: number;
}
