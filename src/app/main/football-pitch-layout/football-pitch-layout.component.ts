import { Component } from '@angular/core';

@Component({
  selector: 'football-pitch-layout',
  templateUrl: './football-pitch-layout.component.html',
  styleUrls: ['./football-pitch-layout.component.scss'],
})
export class FootballPitchLayoutComponent {

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
