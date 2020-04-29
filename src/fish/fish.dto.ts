import { CritterDTO } from '../base-critter/critter.dto';

export class FishDTO extends CritterDTO {
    shadow: string;
    size: string;
    lightingType: string;
}
