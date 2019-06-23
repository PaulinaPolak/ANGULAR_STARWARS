import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';


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

  private activatedRoute: ActivatedRoute;
  private router: Router;

  public pages: number[];
  public currentPage: number;


  constructor(http: HttpClient, activatedRoute: ActivatedRoute, router: Router) {
    this.http = http;
    this.activatedRoute = activatedRoute;
    this.router = router;

  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      let page: number;
      if (params.page) {
        page = parseInt(params.page, 10);
        this.currentPage = page;
        this.getPageByIndex(page);
      }
      else {
        const url = 'https://swapi.co/api/people/?format=json';
        this.getPage(url);
      }
    });
  }

  private getPage(url: string): void {

    const response = this.http.get(url);
    response.subscribe((data: SwapiResponse) => {
      const characters: Person[] = data.results;
      this.people = characters;
      this.next = data.next;
      this.previous = data.previous;
      this.pages = [...new Array(Math.ceil(data.count / 10))].map((element, index) => index + 1);
    });
  }


  public previousPage(): void {
    this.currentPage--;
    this.router.navigateByUrl(`/characters/${this.currentPage}`);
    this.getPage(this.previous);
  }

  public nextPage(): void {
    this.currentPage++;
    this.router.navigateByUrl(`/characters/${this.currentPage}`);
    this.getPage(this.next);
  }

  private getPageByIndex(pageIndex: number): void {
    this.currentPage = pageIndex;
    this.router.navigateByUrl(`/characters/${this.currentPage}`);
    const url: string = `https://swapi.co/api/people/?page=${pageIndex}&format=json`;
    this.getPage(url);
  }
}
