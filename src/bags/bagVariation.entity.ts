import { AbstractEntity } from '../entities/abstract-entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BagEntity } from './bag.entity';

@Entity('bag_variation')
export class BagVariationEntity extends AbstractEntity {
    @Column({ name: 'image_url', nullable: true })
    imageUrl: string;

    @Column({ name: 'body_color' })
    bodyColor: string;

    @Column()
    color1: string;

    @Column()
    color2: string;

    @Column({ name: 'internal_id' })
    internalId: number;

    @ManyToOne(
        () => BagEntity,
        bag => bag.variations,
        { nullable: false, onDelete: 'CASCADE' }
    )
    @JoinColumn([{ name: 'bag_id', referencedColumnName: 'id' }])
    bag: BagEntity;
}
