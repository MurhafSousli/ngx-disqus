import { Component } from '@angular/core';
import {AppState} from "./app.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appState: AppState) {
  }
}
