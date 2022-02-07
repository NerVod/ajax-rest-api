import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService, Produit } from '../catalogue.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produit?: Produit

  constructor(
    private activatedRoute: ActivatedRoute,
    private catalogueService: CatalogueService
    ) { }

  ngOnInit(): void {
    const productIdTxt = this.activatedRoute.snapshot.paramMap.get('id');
    if(productIdTxt){
      const productId = window.parseInt(productIdTxt)
      const produit = this.catalogueService.produits[productId];
      console.log(produit);
      this.produit = produit;
    }
  }

}
