import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starwars';
  selectedIndex: number;
  pictures: Array<string>;
  constructor() {

    this.pictures = new Array(
      'https://images-na.ssl-images-amazon.com/images/I/A1wnJQFI82L._SY679_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/71tglII26nL._SY679_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/51UdiBUkerL.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/51dnPvQrJ6L.jpg',
      'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/61nAp2cNlbL._SY679_.jpg');
    this.selectedIndex = 0;
  }
  get selectedPicture(): string {
    return this.pictures[this.selectedIndex];
  }
}

