import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form.service';


              interface monTest {
                a: string,
                b: number,
                [key: string]: any
}

interface Message {
  message: string,
}


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  message?: string = '';
  intervalId?: number;
  compteur = 0;
  utilisateur = {
    nom:'Skywalker',
    prenom:'Luke',
    favouriteJedi: 'Obi-Wan Kenobi',
    email:'maytheforce@jedi.holonet'
  }

  constructor(
    public form: FormService,
    public router: Router
    ) { 
    const varTest: monTest ={
      a: 'test',
      b: 42,
      nimporte: '',
      quoi:'',
    };
  }

  displaySomething() {
    this.form.fetchData().subscribe( {
      next: (value) => {
        const myMessage: Message = value as Message;
        this.message = myMessage.message;
      },
      error: (error) => {
        this.message = error;
      },
      complete() {
        console.log('travail terminé ..')
      }
    })
  }


  SoumettreFormulaire(monForm: NgForm) {
    console.log('Tentative d\'envoi du formulaire', monForm);

    if(monForm.valid) {
      console.log('Envoi des données au serveur ...');
      try {
        this.form.submitForm(monForm).subscribe(result => {
          console.log('result :', result);
          const serverMessage: Message = result as Message;
          this.message = serverMessage.message;

          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 2000);
      })
      } catch (error) {
        console.log('Erreur à l\'envoi du formulaire: ', error)
      }
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
  
  

  


}
