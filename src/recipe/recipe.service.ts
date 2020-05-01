import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeEntity } from './recipe.entity';
import { RecipeDTO, RecipeMaterial } from './recipe.dto';

@Injectable()
export class RecipeService {
    constructor(
        @InjectRepository(RecipeEntity)
        private recipeRepo: Repository<RecipeEntity>
    ) {
    }

    async getAll(): Promise<RecipeDTO[]> {
        const recipes = await this.recipeRepo.find({order: {id: 'ASC'}});
        return recipes.map(this.mapToDTO);
    }

    async getById(id: number): Promise<RecipeDTO> {
        const recipe = await this.recipeRepo.findOneOrFail(id);
        return this.mapToDTO(recipe);
    }

    async getPossibleRecipes(materialList: RecipeMaterial[]): Promise<RecipeDTO[]> {
        const allRecipes = await this.recipeRepo.find();
        const canMake = [];

        for (const recipe of allRecipes) {
            for (const [index, recipeMaterial] of recipe.materials.entries()) {
                const foundMaterial = materialList.find(m => m.name.toLowerCase() === recipeMaterial.name.toLowerCase());
                if (!foundMaterial || (foundMaterial && foundMaterial.amount < recipeMaterial.amount)) break;
                if (index === recipe.materials.length - 1) {
                    canMake.push(recipe);
                }
            }
        }

        return canMake;
    }

    private mapToDTO(recipe: RecipeEntity): RecipeDTO {
        return recipe;
    }
}
