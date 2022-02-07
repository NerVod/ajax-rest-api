import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cours Angular DIWJS 17';

  constructor() {
    window.setTimeout(()=> {
      this.title = 'Nouveau titre'
    },5000);
  }

}
