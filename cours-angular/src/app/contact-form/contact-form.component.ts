import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

              interface monTest {
                a: string,
                b: number,
                [key: string]: any
}


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  intervalId?: number;
  compteur = 0;
  utilisateur = {
    nom:'Skywalker',
    prenom:'Luke',
    email:'maytheforce@jedi.holonet'
  }

  constructor() { 
            const varTest: monTest ={
              a: 'test',
              b: 42,
              nimporte: '',
              quoi:'',
            }

  }

  ngOnInit(): void {
    console.log('OnInit ...');
    this.intervalId = window.setInterval(() => {
      console.log('Une seconde est passée')
    },1000)
  }

  ngOnDestroy() {
    console.log('OnDestroy');
    window.clearInterval(this.intervalId)
  }

  plus() {
    this.compteur ++
  };


  //  inutile avec [(ngModel)] :
  // majPrenom(inputNom: HTMLInputElement): void {
  //   console.log(inputNom.value)
  //   this.utilisateur.prenom= inputNom.value
  // }
  
  SoumettreFormulaire(monForm: NgForm): void {
    console.log('Tentative d\'envoi du formulaire');

    if(monForm.valid) {
      console.log('Envoi des données au serveur ...')
    }
  };

  


}
