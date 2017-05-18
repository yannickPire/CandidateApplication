import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CandidatesService {

  constructor(private http:Http) { 
    console.log('Candidate Service Initialized');
  }

  getCandidates(){
    return this.http.get('http://localhost:3000/api/candidates').map(res => res.json());
  }

}
