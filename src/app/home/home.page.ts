import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {
    this.readAPI('http://www.omdbapi.com/?i=tt3896198&apikey=VOTRE_CLÉ_API')
      .subscribe((data) => {
      console.log(data);
    });
  }
}

