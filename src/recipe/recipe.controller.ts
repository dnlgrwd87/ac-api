import { BadRequestException, Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ApiBody, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RecipeDTO, RecipeMaterial } from './recipe.dto';
import { RecipeService } from './recipe.service';

@ApiTags('Recipes')
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

    @Post()
    @HttpCode(200)
    @ApiBody({type: [RecipeMaterial]})
    @ApiOkResponse({type: [RecipeDTO]})
    calculatePossibleRecipes(@Body() materialList: RecipeMaterial[]) {
        if (!this.isValidMaterial(materialList)) throw new BadRequestException('Provided materials are not in the correct format');
        return this.recipeService.getPossibleRecipes(materialList);
    }

    private isValidMaterial(materials: RecipeMaterial[]) {
        for (const m of materials) {
            if (typeof (m as RecipeMaterial).amount !== 'number' || typeof (m as RecipeMaterial).name !== 'string') {
                return false;
            }
        }
        return true;
    }
}
