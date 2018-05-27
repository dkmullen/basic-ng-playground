import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Doge';
  myDisplay = true;
  buttonClickLog = [];
  logItem = 0;
  backgroundColor = '';
  color = '';

  clearUserName() {
    this.userName = '';
  }

  onClick() {
    this.myDisplay = !this.myDisplay;
    this.logItem++
    this.buttonClickLog.push(this.logItem);
    if (this.buttonClickLog.length > 3) {
      this.backgroundColor = 'blue';
      this.color = 'white';
    }
  }
}
