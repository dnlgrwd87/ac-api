import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeEntity } from './recipe.entity';
import { RecipeDTO } from './recipe.dto';

@Injectable()
export class RecipeService {
    constructor(
        @InjectRepository(RecipeEntity)
        private recipeRepo: Repository<RecipeEntity>
    ) {}

    async getAll(): Promise<RecipeDTO[]> {
        const recipes = await this.recipeRepo.find({order: {id: 'ASC'}});
        return recipes.map(this.mapToDTO);
    }

    async getById(id: number): Promise<RecipeDTO> {
        const recipe = await this.recipeRepo.findOneOrFail(id);
        return this.mapToDTO(recipe);
    }

    private mapToDTO(recipe: RecipeEntity): RecipeDTO {
        return recipe;
    }
}
