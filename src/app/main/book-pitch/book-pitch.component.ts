import { Component, Input, OnInit } from '@angular/core';
import { Pitch } from '../shared/models/pitch';
import { MainService } from '../services/main.service';

@Component({
  selector: 'book-pitch',
  templateUrl: './book-pitch.component.html',
  styleUrls: ['./book-pitch.component.scss'],
})
export class BookPitchComponent implements OnInit {

pitches: Pitch[];
inputPitch: Pitch;
types: String[];
inputType: String;

  constructor(private mainService: MainService) { }

  getPitches(): void {
    this.mainService.getPitches().then(pitches => this.pitches = pitches);
  }
  ngOnInit(): void {
    this.getPitches();
  }
  pitchNameChanged(event) {
    if (event.name != null) {
      this.mainService.getTypesForPitch().then(types => this.types = types);
    } 
  }

  addPitch(): void {
    
  }


}
