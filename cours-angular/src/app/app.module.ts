import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { HeaderComponent } from './header/header.component';
import { SyntaxeComponent } from './syntaxe/syntaxe.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
// import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProduitComponent } from './produit/produit.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './ui/card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    SyntaxeComponent,
    LifecycleComponent,
    ContactFormComponent,
    CatalogueComponent,
    AjoutProduitComponent,
    PageNotFoundComponent,
    ProduitComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
