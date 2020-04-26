export interface BagDTO {
    name: string;
    image: string;
    storageImage: string;
    buyPrice: number;
    sellPrice: number;
    bodyColor: string;
    diy: boolean;
    size: string;
    style: string;
    source: string;
    sourceNotes: string;
    inCatalog: boolean;
    canReorder: boolean;
}

export interface BagVariationDTO {
    id: number;
    image: string;
    colors: string[];
}
