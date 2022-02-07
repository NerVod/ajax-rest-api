import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  random = this.numbersService.randomNumber; 

  constructor(
    private monServiceTitle: Title, 
    private numbersService: NumbersService,
  ) {
  const titreActuel = this.monServiceTitle.getTitle()
    console.log(titreActuel)    
  }

  nouveauTitre(nouveauTitre: string) {
    this.monServiceTitle.setTitle(nouveauTitre)    
  }

  

}
