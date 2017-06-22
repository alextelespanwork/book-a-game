import { Component, Input } from '@angular/core';

@Component({
  selector: 'football-pitch-layout',
  templateUrl: './football-pitch-layout.component.html',
  styleUrls: ['./football-pitch-layout.component.scss'],
})
export class FootballPitchLayoutComponent {
@Input() pitchType: {id: number, type: String};
p: String = this.pitchType.type;


fiveASide: String[] =   ['b-lgoalkeeper', 'b-ldefender2', 'b-ldefender3', 'b-lmidfielder2', 'b-lforward2'];
sixASide: String[] =    ['b-lgoalkeeper', 'b-ldefender2', 'b-ldefender3', 'b-lmidfielder1', 'b-lmidfielder3', 
                         'b-lforward2'];
sevenASide: String[] =  ['b-lgoalkeeper', 'b-ldefender2', 'b-ldefender3', 'b-lmidfielder1', 'b-lmidfielder2',
                         'b-lmidfielder3', 'b-lforward2'];
eightASide: String[] =  ['b-lgoalkeeper', 'b-ldefender1', 'b-ldefender2', 'b-ldefender3', 'b-ldefender4', 
                         'b-lmidfielder1', 'b-lmidfielder3', 'b-lforward2'];
nineASide: String[] =   ['b-lgoalkeeper', 'b-ldefender1', 'b-ldefender2', 'b-ldefender3', 'b-ldefender4', 
                         'b-lmidfielder1', 'b-lmidfielder3', 'b-lforward1', 'b-lforward3'];
tenASide: String[] =    ['b-lgoalkeeper', 'b-ldefender1', 'b-ldefender2', 'b-ldefender3', 'b-ldefender4', 
                         'b-lmidfielder1', 'b-lmidfielder2', 'b-lmidfielder3', 'b-lforward1', 'b-lforward3'];
elevenASide: String[] = ['b-lgoalkeeper', 'b-ldefender1', 'b-ldefender2', 'b-ldefender3', 'b-ldefender4', 
                         'b-lmidfielder1', 'b-lmidfielder2', 'b-lmidfielder3', 'b-lforward1', 'b-lforward2', 
                         'b-lforward3'];

makeVisible(butId) {  
  if (this.pitchType.id === 5) {

  }
}

//initialize the screen depending on the pitchType

  onClick(event) {
    console.log(event);
      console.log(event.srcElement.className);
      console.log(event.srcElement.firstChild.className);


    if (event.srcElement.className.includes('btn-default')) {
      event.srcElement.className = 'btn btn-warning';
      event.srcElement.firstChild.className = 'ion-close-round';          
    } else if (event.srcElement.className.includes('btn-warning')) {
      event.srcElement.className = 'btn btn-default';
      event.srcElement.firstChild.className = 'ion-plus-round';      
    }
    //console.log(event.srcElement.attributes.id);
    //var idAttr = event.srcElement.attributes.id;
    //var value = idAttr.nodeValue;
    //console.log(value);
  }
}
