import {Component} from '@angular/core';
import {AppState} from '../app.state';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html'
})
export class PreviewComponent {

  constructor(public appState: AppState) {

  }


}
