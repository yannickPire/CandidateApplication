import { Component } from '@angular/core';
import { CandidatesService } from './services/candidates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CandidatesService]
})
export class AppComponent {
  title = 'app works!';
}
