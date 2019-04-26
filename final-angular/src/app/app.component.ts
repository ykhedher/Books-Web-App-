import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
  var config = {
    apiKey: "AIzaSyBd-kIQsv5mL8I2NfQnl0yzGz6N4ht5TTU",
    authDomain: "books-angularjs.firebaseapp.com",
    databaseURL: "https://books-angularjs.firebaseio.com",
    projectId: "books-angularjs",
    storageBucket: "books-angularjs.appspot.com",
    messagingSenderId: "472476325222"
  };
  firebase.initializeApp(config);

}
}

