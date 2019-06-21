import { Component } from '@angular/core';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.scss']
})
export class PostersComponent {
  
  numerWybranegoObrazka = 0;

  kliknietoElement(numerObrazka) {
    this.numerWybranegoObrazka = numerObrazka;
    console.warn('Kliknięto w obrazek nr: ', this.numerWybranegoObrazka);
  }

  constructor() {
    console.log('Użyto app-gallery');
  }

  selectPicture() {
    console.warn('Wywołano selectPicture');
  }

}
