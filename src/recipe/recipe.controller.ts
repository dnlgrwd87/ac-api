import { Controller, Get, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { RecipeDTO } from './recipe.dto';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
    constructor(private recipeService: RecipeService) {
    }

    @Get()
    @ApiOkResponse({type: RecipeDTO})
    @ApiNotFoundResponse({description: 'No data was found'})
    getAllRecipes() {
        return this.recipeService.getAll();
    }

    @Get(':id')
    @ApiOkResponse({type: RecipeDTO})
    @ApiNotFoundResponse({description: 'No data was found'})
    getRecipeById(@Param('id') id: number) {
        return this.recipeService.getById(id);
    }
}
