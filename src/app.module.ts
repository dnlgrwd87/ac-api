import { Module } from '@nestjs/common';
import { DatabaseConnectionService } from './database-connection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FossilModule } from './fossil/fossil.module';
import { VillagerModule } from './villager/villager.module';
import { BagModule } from './bag/bag.module';
import { BugModule } from './bug/bug.module';
import { FishModule } from './fish/fish.module';
import { RecipeModule } from './recipe/recipe.module';
import { ArtModule } from './art/art.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: DatabaseConnectionService
        }),
        FossilModule,
        VillagerModule,
        BagModule,
        BugModule,
        FishModule,
        RecipeModule,
        ArtModule
    ]
})
export class AppModule {
}
