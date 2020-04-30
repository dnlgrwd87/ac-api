export class CritterDTO {
    id: number;
    name: string;
    critterpediaImage: string;
    furnitureImage: string;
    iconImage: string;
    museumDescription: string;
    catchPhrase: string;
    sellPrice: number;
    obtainedFrom: string;
    colors: string[];
    rarity: string;
    activeMonths: { north: number[], south: number[] };
    activeHours: any[];
}
