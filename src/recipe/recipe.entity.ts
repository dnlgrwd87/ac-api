import { AbstractEntity } from '../abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity('recipe')
export class BagEntity extends AbstractEntity {
    @Column({unique: true})
    name: string;

    @Column()
    category: string;

    @Column()
    source: string;

    @Column({name: 'source_notes'})
    sourceNotes: string;

    @Column({name: 'spreadsheet_id', unique: true, select: false})
    spreadsheetId: string;
}
