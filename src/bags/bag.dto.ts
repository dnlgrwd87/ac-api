export interface BagDTO {
    name: string;
    buyPrice: number | string;
    sellPrice: number;
    diy: boolean;
    size: string;
    style: string;
    source: string;
    sourceNotes: string;
    inCatalog: boolean;
    canReorder: boolean;
    variations: BagVariationDTO[];
}

export interface BagVariationDTO {
    id: number;
    image: string;
    colors: string[];
    internalId: number;
}
