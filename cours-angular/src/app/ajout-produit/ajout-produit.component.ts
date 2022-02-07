import { Component, OnInit } from '@angular/core';
import { CatalogueService, Produit } from '../catalogue.service';



@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss']
})
export class AjoutProduitComponent implements OnInit {

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
  }

  creerProduit() {
    const produit: Produit = {
      nom: 'Lama',
      image: "https://www.mascotte-france.fr/wp-content/uploads/2017/12/mascotte-lama.jpg"
    };
    this.catalogueService.ajouterProduit(produit)
  }

}
