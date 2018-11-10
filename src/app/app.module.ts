import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FooterComponent } from './footer/footer.component';
import { DropDownCutomDirective } from './shared/custom-directives/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-service/shopping.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipe/recipe-service/recipe.service';
import { RecipeStorageBackendService } from './shared/server-services/recipe-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth-service/auth-service.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesModule } from './recipe/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    // DropDownCutomDirective, //made this directive as -> shared module
  ],
  imports: [ // ? Modules which r declared in the imports array in Appmodule are EAGERLY_LOADED
    BrowserModule,
    /*  BrowserModule is written in app.module.ts -> this module contains CommonModule and other additional features
     which might be used when application is loaded, So we should only is use BrowserModule in App Module(root module)
     and CommonModule in the feature module */

    AppRoutingModule,
    // RecipesModule, // ? let us make this (RecipesModule) module lazy loaded rather than eagerly loaded
    FormsModule, // template-driven forms
    // ReactiveFormsModule, // Reactive Forms
    HttpClientModule,
    SharedModule,
    ShoppingListModule,
    AuthModule

  ],
  providers: [ShoppingListService, RecipeService, RecipeStorageBackendService,
    AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
