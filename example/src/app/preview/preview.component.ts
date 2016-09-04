import { Component } from '@angular/core';
import {AppState} from "../app.service";

@Component({
  selector: 'preview',
  templateUrl: './preview.template.html'
})
export class Preview {

  constructor(private appState: AppState){

  }
}
