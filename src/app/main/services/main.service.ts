// Angular
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

// Observable
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Pitch
import { Pitch } from '../shared/models/pitch';
import { PITCHES } from './pitches';

@Injectable()

export class MainService {

  constructor(private http: Http) {}

  getPitches(): Promise<Pitch[]> {
    return Promise.resolve(PITCHES);
  }

//   getPitches(term: string): Observable<Pitch[]> {
//     return this.http
//       .get(`pitches`)
//       .map(response => response.json().data as Pitch[]);
//   }
}
