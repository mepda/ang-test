import { Component } from '@angular/core';
import {Http} from '@angular/http';
//going to be using the HTTP module for getting data

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  payOptions: Array<any>;


  constructor(private http:Http) {

    this.http.get('./data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.payOptions = res);

  }
}
