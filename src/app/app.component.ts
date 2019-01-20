import { Component } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  compMotto = 'Your Homestay Partner';

  clickHandler() {
    alert("I'm clicked");
  }
}
