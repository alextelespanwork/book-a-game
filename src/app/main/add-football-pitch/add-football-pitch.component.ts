import { Component, OnInit } from '@angular/core';
// import { FootballPitchLayoutComponent } from '../football-pitch-layout/football-pitch-layout.component';

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
  pitchType: String;

  constructor() {
    this.pitchTypes = [{ id: 5, type: 'Five a Side' },
                      { id: 6, type: 'Six a Side' },
                      { id: 7, type: 'Seven a Side' },
                      { id: 8, type: 'Eight a Side' },
                      { id: 9, type: 'Nine a Side' },
                      { id: 10, type: 'Ten a Side' },
                      { id: 11, type: 'Eleven a Side' }];      
  }

  ngOnInit(): void {      
  this.inputTypePitch = this.pitchTypes[0];
  
  this.pitchType = this.inputTypePitch.type;  
  console.log("----ngOnInit");
  console.log(this.pitchType);
  }


  pitchTypeChanged(newInputPitchType): void {
    console.log("----pitchTypeChanged");    
    this.inputTypePitch = newInputPitchType;
    this.pitchType = this.inputTypePitch.type;
    console.log(this.pitchType);
  }


  addPitch() {    
    //console.log(this.inputName);
    //console.log(this.inputAddress);
    //console.log(this.inputTypePitch);
    //https://scotch.io/tutorials/how-to-deal-with-different-form-controls-in-angular-2
  }

}
