import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisqusModule } from 'ngx-disqus';
import { DocsComponent } from './docs/docs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DisqusModule, DocsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
