import { AbstractEntity } from '../abstractEntity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BagEntity } from './bag.entity';

@Entity('bag_variation')
export class BagVariationEntity extends AbstractEntity {
    @Column({ nullable: true })
    image: string;

    @Column({ name: 'body_color' })
    bodyColor: string;

    @Column()
    color1: string;

    @Column()
    color2: string;

    @Column({ name: 'spreadsheet_id', unique: true, select: false })
    spreadsheetId: string;

    @ManyToOne(
        () => BagEntity,
        bag => bag.variations,
        { nullable: false, onDelete: 'CASCADE' }
    )
    @JoinColumn([{ name: 'bag_id', referencedColumnName: 'id' }])
    bag: BagEntity;
}
