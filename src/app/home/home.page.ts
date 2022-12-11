import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weather = {
    temp : '',
    pressure : '',
    coord : ''
  };

  constructor(private http: HttpClient) {}
  readAPI(URL: string) {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Paris,France&units=metric&appid=ec5ef282f1aac8635d2dcb5ac76b16b7')
      .subscribe((data) => {
      console.log(data);
      // console.log(data['main']['temp']);
      // console.log(data['main']['pressure']);
      // console.log(data['coord']);
      this.weather.temp = data['main']['temp']
      this.weather.pressure = data['main']['pressure']
      this.weather.coord = data['coord']
    });
  }
  
  sendPostRequest() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };
    let postData = {
            "name": "Customer004",
            "email": "customer004@email.com",
            "tel": "0000252525"
    }

    this.http.post("https://ptrt99yha5.execute-api.eu-west-3.amazonaws.com/dev/post", postData, httpOptions)
      .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
    }
}

