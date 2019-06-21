
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Planet {
  name: string;
  terrain: string;
  population: number;
  climate: string;
  gravity: string;
}
interface SwapiResponse {

  count: number;
  next: string;
  previous: string;
  results: Planet[];

}


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  private http: HttpClient;
  public planets: Planet[];
  private previous: string;
  private next: string;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public ngOnInit(): void {
    const url = 'https://swapi.co/api/planets/?format=json';
    this.getPage(url);
}

private getPage(url: string): void {
  
  const response = this.http.get(url);
  response.subscribe((data: SwapiResponse) => {
    const planets: Planet[] = data.results;
    // console.log(planets);
    this.planets = planets;
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