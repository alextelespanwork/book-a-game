// Angular
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

// Observable
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Pitch
import { Pitch } from '../shared/models/pitch';
import { PITCHES } from './pitches';
import { PTYPES } from './pitch-types';

@Injectable()

export class MainService {

  constructor(private http: Http) {}

  getPitches(): Promise<Pitch[]> {
    return Promise.resolve(PITCHES);
  }

  getTypesForPitch(): Promise<String[]> {
    return Promise.resolve(PTYPES);
  }

//   getPitches(term: string): Observable<Pitch[]> {
//     return this.http
//       .get(`pitches`)
//       .map(response => response.json().data as Pitch[]);
//   }
}
