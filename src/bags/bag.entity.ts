import { AbstractEntity } from '../abstractEntity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity('bag')
export class BagEntity extends AbstractEntity {
    @Column()
    name: string;

    @Column({ nullable: true })
    image: string;

    @Column({ name: 'storage_image', nullable: true })
    storageImage: string;

    @Column({ name: 'buy_price' })
    buyPrice: number;

    @Column({ name: 'sell_price' })
    sellPrice: number;

    @Column({ name: 'body_color' })
    bodyColor: string;

    @Column({ name: 'label_themes' })
    themes: string;

    @Column()
    color1: string;

    @Column()
    color2: string;

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

    @Column({ name: 'seasonal_availability' })
    seasonalAvailabilty: string;

    @Column({ name: 'in_catalog' })
    inCatalog: boolean;

    @Column({ name: 'can_reorder' })
    canReorder: boolean;

    @Column({ name: 'spreadsheet_id', unique: true, select: false })
    spreadsheetId: string;
}
