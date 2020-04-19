import { AbstractEntity } from '../entities/abstract-entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { BagVariationEntity } from './bagVariation.entity';

@Entity('bag')
export class BagEntity extends AbstractEntity {
    @Column({ unique: true })
    name: string;

    @Column({ name: 'buy_price' })
    buyPrice: number;

    @Column({ name: 'sell_price' })
    sellPrice: number;

    @Column()
    diy: boolean;

    @Column()
    size: string;

    @Column()
    style: string;

    @Column()
    source: string;

    @Column({ name: 'source_notes' })
    sourceNotes: string;

    @Column({ name: 'in_catalog' })
    inCatalog: boolean;

    @Column({ name: 'can_reorder' })
    canReorder: boolean;

    @OneToMany(
        () => BagVariationEntity,
        bagVariation => bagVariation.bag
    )
    variations: BagVariationEntity[];
}
