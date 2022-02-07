import { Component, OnInit } from '@angular/core';
import { CatalogueService, Produit } from '../catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  produits: Produit[] = []

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.produits =this.catalogueService.produits;
    console.log(this.produits);
    console.log('CatalogueComponent onInit')
  }

  ngOnDestroy(): void {
console.log('CatalogueComponent onDestroy')

  }
}
