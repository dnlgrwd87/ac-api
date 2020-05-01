import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { RecipeDTO } from './recipe.dto';
import { RecipeService } from './recipe.service';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Material {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;
}

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
    @ApiOkResponse({type: RecipeDTO})
    calculatePossibleRecipes(@Body('materials') materialList: Material[]) {
        return this.recipeService.getPossibleRecipes(materialList);
    }
}
