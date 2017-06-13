import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import * as GoogleMapsLoader from 'google-maps';

import { Pitch } from './shared/models/pitch';

@Component({
  selector: 'football-pitches',
  templateUrl: './football-pitches.component.html',
  styleUrls: ['./football-pitches.component.scss'],
})
export class FootballPitchesComponent {

@ViewChild('googlemap') el:any;

  constructor() {}

pitches: Pitch[] = [
        { id: 1, name: 'Finsbury Leisure Centre', address: '1 Norman St, London EC1V 3PU' },
        { id: 2, name: 'Ultimate5ASIDE', address: '86-90 Paul St, London EC2A 4NE' },
        { id: 3, name: 'Dream Leagues', address: '35 Kingsland Rd, London E2 8AA' },
        { id: 4, name: 'Blue Hut Youth Centre 5-a-side', address: 'Britannia Walk, London N1' },
        { id: 5, name: 'Mulberry Sports & Leisure Centre', address: 'Richard St, London E1 2JP' },
    ];
    activePitch: Pitch;

    selectPitch(pitch) {
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
