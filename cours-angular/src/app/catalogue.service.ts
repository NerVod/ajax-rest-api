import { Injectable } from "@angular/core";

export interface Produit {
    nom: string;
    image: string;
}

// export type Catalogue = Produit[]

@Injectable({
    providedIn: 'root',
})
export class CatalogueService {
    produits: Produit[] = [
        {
            nom: 'Orque',
            image: "https://www.mascotte-france.fr/wp-content/uploads/2017/12/mascotte-orque-510x510.jpg",
        },
        {
            nom: 'Gorille',
            image: "https://www.mascotte-france.fr/wp-content/uploads/2017/12/mascotte-gorille-qui-porte-510x510.jpg",
        },
        {
            nom: 'Banane',
            image: "https://www.mascotte-france.fr/wp-content/uploads/2018/01/mascotte-banane.jpg"
        },
        {
            nom: 'Diable',
            image: "https://www.mascotte-france.fr/wp-content/uploads/2018/01/mascotte-diable-2-510x510.jpg"
        }
    ];

    constructor() {
        let monTableau = ['a', 'b'];
        let autreTableau = monTableau;
        monTableau.push('c');
        console.log('autreTableau : ',autreTableau)
    }

    ajouterProduit(nouveauProduit: Produit) {
        this.produits.push(nouveauProduit);
    }

}