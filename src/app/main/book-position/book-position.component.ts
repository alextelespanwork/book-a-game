import { Component, Input, OnInit } from '@angular/core';
import { Pitch } from '../shared/models/pitch';
import { MainService } from '../services/main.service';

@Component({
  selector: 'book-position',
  templateUrl: './book-position.component.html',
  styleUrls: ['./book-position.component.scss'],
})
export class BookPositionComponent implements OnInit {

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
