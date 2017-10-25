import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Pitch } from '../shared/models/pitch';
import { PitchType } from '../shared/models/pitchType';
import { MainService } from '../services/main.service';

@Component({
  selector: 'book-pitch',
  templateUrl: './book-pitch.component.html',
  styleUrls: ['./book-pitch.component.scss'],
//  host: {
//    '(document:click)': 'handleClick($event)',
//  },
})
export class BookPitchComponent implements OnInit {

pitches: Pitch[];
inputPitch: Pitch;
pitchtypes: PitchType[];
inputTypes: PitchType[];
inputType: PitchType;

// filteredList = [];
// elementRef;
// selectedIdx: number;

  constructor(private mainService: MainService)//, myElement: ElementRef) 
  {
  //  this.elementRef = myElement;
  //  this.selectedIdx = -1;
  }

  getPitches(): void {
    this.mainService.getPitches().then(pitches => this.pitches = pitches);
  }

  getTypes(): void {
    this.mainService.getTypesForPitch().then(pitchtypes => this.pitchtypes = pitchtypes);

  }
  ngOnInit(): void {
    this.getPitches();   
    this.getTypes(); 
  }
  pitchNameChanged(event) {
    if (event.name != null) {
      this.inputTypes =  this.pitchtypes.filter(entry => event.types.indexOf(entry.id) > -1); 
      this.inputType = this.inputTypes[0];
    } 
  }
  pitchTypeChanged(newInputPitchType): void {   
    this.inputType = newInputPitchType;
  }

  addPitch(): void {    
  }
}
