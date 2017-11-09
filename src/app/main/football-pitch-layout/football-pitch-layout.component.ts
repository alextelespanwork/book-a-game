import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'football-pitch-layout',
  templateUrl: './football-pitch-layout.component.html',
  styleUrls: ['./football-pitch-layout.component.scss'],
})
export class FootballPitchLayoutComponent implements OnInit {
@Input() pitchType: String;

//pType: String = new String();
fiveASide: boolean = false;
sixASide: boolean = false;
sevenASide: boolean = false;
eightASide: boolean = false;
nineASide: boolean = false;
tenASide: boolean = false;
elevenASide: boolean = false;

ngOnInit(): void {      
  this.pitchType = "Eleven a Side";
  this.setPitchButtonsVisibility(this.pitchType);
}

//ngAfterViewChecked()	
//{
  //console.log(this.pitchType);
  //this.setPitchButtonsVisibility(this.pitchType);
//}

// fiveASide: String[] =   ['b-lgoalkeeper', 'b-ldefender2', 'b-ldefender3', 'b-lmidfielder2', 'b-lforward2'];
// sixASide: String[] =    ['b-lgoalkeeper', 'b-ldefender2', 'b-ldefender3', 'b-lmidfielder1', 'b-lmidfielder3', 
//                          'b-lforward2'];
// sevenASide: String[] =  ['b-lgoalkeeper', 'b-ldefender2', 'b-ldefender3', 'b-lmidfielder1', 'b-lmidfielder2',
//                          'b-lmidfielder3', 'b-lforward2'];
// eightASide: String[] =  ['b-lgoalkeeper', 'b-ldefender1', 'b-ldefender2', 'b-ldefender3', 'b-ldefender4', 
//                          'b-lmidfielder1', 'b-lmidfielder3', 'b-lforward2'];
// nineASide: String[] =   ['b-lgoalkeeper', 'b-ldefender1', 'b-ldefender2', 'b-ldefender3', 'b-ldefender4', 
//                          'b-lmidfielder1', 'b-lmidfielder3', 'b-lforward1', 'b-lforward3'];
// tenASide: String[] =    ['b-lgoalkeeper', 'b-ldefender1', 'b-ldefender2', 'b-ldefender3', 'b-ldefender4', 
//                          'b-lmidfielder1', 'b-lmidfielder2', 'b-lmidfielder3', 'b-lforward1', 'b-lforward3'];
// elevenASide: String[] = ['b-lgoalkeeper', 'b-ldefender1', 'b-ldefender2', 'b-ldefender3', 'b-ldefender4', 
//                          'b-lmidfielder1', 'b-lmidfielder2', 'b-lmidfielder3', 'b-lforward1', 'b-lforward2', 
//                          'b-lforward3'];

setPitchButtonsVisibility( p: String ): void {
  if (p === 'Five a Side') { this.fiveASide = true; }
  else if (p === 'Six a Side') { this.sixASide = true; }
  else if (p === 'Seven a Side') { this.sevenASide = true; }
  else if (p === 'Eight a Side') { this.eightASide = true; }
  else if (p === 'Nine a Side') { this.nineASide = true; }
  else if (p === 'Ten a Side') { this.tenASide = true; }
  else if (p === 'Eleven a Side') { this.elevenASide = true; } 

}


  onClick(event) {
    //console.log(event);
    //console.log(event.srcElement.className);
    //console.log(event.srcElement.firstChild.className);
    if (event.srcElement.className.includes('btn-default')) {
      event.srcElement.className = 'btn btn-warning';
      event.srcElement.firstChild.className = 'ion-close-round';          
    } else if (event.srcElement.className.includes('btn-warning')) {
      event.srcElement.className = 'btn btn-default';
      event.srcElement.firstChild.className = 'ion-plus-round';      
    } else if (event.srcElement.className.includes('ion-close-round')) {
      event.srcElement.className = 'ion-plus-round';
      event.srcElement.parentElement.className = 'btn btn-default';        
    } else if (event.srcElement.className.includes('ion-plus-round')) {
      event.srcElement.className = 'ion-close-round';      
      event.srcElement.parentElement.className = 'btn btn-warning';
    }
  }
}
