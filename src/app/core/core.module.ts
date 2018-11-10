import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shopping-list/shopping-service/shopping.service';
import { RecipeService } from '../recipe/recipe-service/recipe.service';
import { RecipeStorageBackendService } from '../shared/server-services/recipe-storage.service';
import { AuthService } from '../auth/auth-service/auth-service.service';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        RecipeStorageBackendService,
        AuthService,
        // AuthGuard
    ],
})
export class CoreModule { }
