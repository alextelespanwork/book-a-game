import { Component, OnInit } from '@angular/core';

import { Pitch } from '../shared/models/pitch';

import { MainService } from '../services/main.service';

@Component({
  selector: 'add-football-pitch',
  templateUrl: './add-football-pitch.component.html',
  styleUrls: ['./add-football-pitch.component.scss'],
})
export class AddFootballPitchComponent implements OnInit {

  pitchTypes: {id: number, type: String}[];
  inputName: String = new String();
  inputAddress: String = new String();
  inputTypePitch: {id: number, type: String};
  pitches: Pitch[];

  
  constructor(private mainService: MainService) {
    this.pitchTypes = [{ id: 5, type: 'Five a Side' },
                      { id: 6, type: 'Six a Side' },
                      { id: 7, type: 'Seven a Side' },
                      { id: 8, type: 'Eight a Side' },
                      { id: 9, type: 'Nine a Side' },
                      { id: 10, type: 'Ten a Side' },
                      { id: 11, type: 'Eleven a Side' }];      
  }

  getPitches(): void {
    this.mainService.getPitches().then(pitches => this.pitches = pitches);
  } 

  ngOnInit(): void {      
  this.inputTypePitch = this.pitchTypes[0];
  this.getPitches();
  console.log("----ngOnInit");
  }


  pitchTypeChanged(newInputPitchType): void {
    console.log("----pitchTypeChanged");    
    this.inputTypePitch = newInputPitchType;
  }


  addPitch() {    
    //console.log(this.inputName);
    //console.log(this.inputAddress);
    //console.log(this.inputTypePitch);
    //https://scotch.io/tutorials/how-to-deal-with-different-form-controls-in-angular-2

    console.log(this.inputs);
  }

  inputs: { value: any}[] = [];
  
  addInput() {
    this.inputs.push({ value: this.pitchTypes[0].type });
  }

  deleteInput(input) {
    const p = this.inputs.findIndex(x => x.value === input.value);
    this.inputs.splice(p, 1);
  }

}
