export class RecipeDTO {
    id: number;
    name: string;
    category: string;
    source: string;
    sourceNotes: string;
    materials: RecipeMaterial[];
}

export class RecipeMaterial {
    name: string;
    amount: number;
}
