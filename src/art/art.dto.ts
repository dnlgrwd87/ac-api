export class ArtDTO {
    id: number;
    name: string;
    image: string;
    highResTexture: string;
    artist: string;
    genuine: boolean;
    museumDescription: string;
    buyPrice: number | null;
    sellPrice: number;
    colors: string[];
    hhaConcepts: string[];
    hhaSeries: string | null;
    hhaSet: string | null;
    size: string;
    source: string;
    sourceNotes: string;
    interactive: boolean;
    inCatalog: boolean;
    canReorder: boolean;
}
