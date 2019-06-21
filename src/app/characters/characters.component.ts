import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Person {
  name: string;
  gender: string;
  height: number;
  skin_color: string;
  mass: number;
}
interface SwapiResponse {

  count: number;
  next: string;
  previous: string;
  results: Person[];

}


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  private http: HttpClient;
  public people: Person[];
  private previous: string;
  private next: string;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public ngOnInit(): void {
    const url = 'https://swapi.co/api/people/?format=json';
    this.getPage(url);
}

private getPage(url: string): void {
  
  const response = this.http.get(url);
  response.subscribe((data: SwapiResponse) => {
    const planets: Person[] = data.results;
    // console.log(planets);
    this.people = planets;
    this.next = data.next;
    this.previous = data.previous;
  });
}


public previousPage(): void {
  this.getPage(this.previous);
}

public nextPage(): void {
  this.getPage(this.next);
}
}
