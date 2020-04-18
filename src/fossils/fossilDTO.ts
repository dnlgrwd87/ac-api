export interface FossilDTO {
    id: number;
    name: string;
    imageUrl: string;
    buyPrice: number | string;
    sellPrice: number;
    colors: string[];
    size: string;
    source: string;
    interactive: boolean;
    inCatalog: boolean;
}
