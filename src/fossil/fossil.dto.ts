export class FossilDTO {
    id: number;
    name: string;
    image: string;
    museumDescription: string;
    buyPrice: number | null;
    sellPrice: number;
    colors: string[];
    size: string;
    source: string;
    interactive: boolean;
    inCatalog: boolean;
    canReorder: boolean;
}
