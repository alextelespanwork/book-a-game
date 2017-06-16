import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-football-pitch',
  templateUrl: './add-football-pitch.component.html',
  styleUrls: ['./add-football-pitch.component.scss'],
})
export class AddFootballPitchComponent implements OnInit {
  pitchTypes: String[];
  inputName: String = new String();
  inputAddress: String = new String();
  inputTypePitch: String = new String();
   ngOnInit(): void {
   this.pitchTypes = ['Five a Side',
                      'Six a Side',
                      'Seven a Side',
                      'Eight a Side',
                      'Nine a Side',
                      'Ten a Side',
                      'Eleven a Side',
                      'Twelve a Side',
                    ];
  }

  addPitch() {    
    console.log(this.inputName);
    console.log(this.inputAddress);
    console.log(this.inputTypePitch);
    
  }

}
