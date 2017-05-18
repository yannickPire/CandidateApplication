import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../services/candidates.service';
import { Candidates } from '../models/candidates';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
})
export class CandidatesComponent implements OnInit {
  candidates: Candidates[];

  constructor(private candidatesService: CandidatesService) {
    this.candidatesService.getCandidates().subscribe(candidates => {
      this.candidates = candidates;
    });
  }

  ngOnInit() {
  }

}
