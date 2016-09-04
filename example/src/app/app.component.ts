import {Component, ViewEncapsulation} from '@angular/core';
import {AppState} from "./app.service";

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.style.scss'],
  template: `
  <div class="wrapper">
    <div class="left-outer">
      <div class="left">
        <header></header>
        <documentation></documentation>
      </div>
    </div>
    
    <div class="right-outer" [class.dark]="appState.get('themeSwitcher')">
      <div class="right">
      
        <preview></preview>
        
      </div>
    </div>
   </div> 
  `
})
export class App {
  constructor(private appState: AppState) {
  }
}

