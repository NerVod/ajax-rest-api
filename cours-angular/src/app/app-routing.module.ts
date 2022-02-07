import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { LifecycleComponent } from "./lifecycle/lifecycle.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProduitComponent } from "./produit/produit.component";
import { SyntaxeComponent } from "./syntaxe/syntaxe.component";


const routes: Route[] = [
    {
      path:  '',
      component: CatalogueComponent,
    },
    {
      path: 'syntaxe',
      component: SyntaxeComponent,
    },
    {
      path: 'lifecycle',
      component: LifecycleComponent,
    },
    {
      path: 'Contact',
      component: ContactFormComponent
    },
    {
      path: 'product/:id',
      component: ProduitComponent 
    },
    {
      path: '**',
      component: PageNotFoundComponent,
    }
    
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}