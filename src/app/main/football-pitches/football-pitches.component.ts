import { Component, ElementRef, Renderer2, ViewChild, OnInit } from '@angular/core';
import * as GoogleMapsLoader from 'google-maps';

import { Pitch } from '../shared/models/pitch';

import { MainService } from '../services/main.service';

@Component({
  selector: 'football-pitches',
  templateUrl: './football-pitches.component.html',
  styleUrls: ['./football-pitches.component.scss'],
})
export class FootballPitchesComponent implements OnInit {

@ViewChild('googlemap') el:any;

  constructor(private mainService: MainService) {}

    pitches: Pitch[]; 

    activePitch: Pitch;

    getPitches(): void {
        this.mainService.getPitches().then(pitches => this.pitches = pitches);
    }

    ngOnInit(): void {
    this.getPitches();
  }

    showMapForPitch(pitch) {
        this.activePitch = pitch;

        //This is used when you know the lat and lng
        // GoogleMapsLoader.load((google) => {            
        //     var uluru = {lat: -34.397, lng: 150.644};
        //     var map = new google.maps.Map(this.el.nativeElement, {
        //         center: {lat: -34.397, lng: 150.644},
        //         zoom: 8            
        //     });
        //     var marker = new google.maps.Marker({
        //         position: uluru,
        //         map: map
        //     });
        // });

        GoogleMapsLoader.KEY = 'AIzaSyDdPXItVvSFXPE35hB0-NyWecMnDsz5inM';

        GoogleMapsLoader.load((google) => {
            var geocoder = new google.maps.Geocoder();
            var address =  this.activePitch.address;
            var uluru = {lat: -34.397, lng: 150.644};

            var resultsMap = new google.maps.Map(this.el.nativeElement, {                
                zoom: 15            
            });

            geocoder.geocode({'address': address}, function(results, status) {
                if (status === 'OK') {
                    resultsMap.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                    });
                } else {
                    //alert('Geocode was not successful for the following reason: ' + status);
                    alert('The address is not a valid address. Please contact the website manager.');
                }
            });

        });

    }

    onPitchCreated(event) {
        this.pitches.push(event.pitch);
    }
}
