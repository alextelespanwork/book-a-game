import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'book-position',
  templateUrl: './book-position.component.html',
  styleUrls: ['./book-position.component.scss'],
})
export class BookPositionComponent implements OnInit {
  pitchType: String;

  ngOnInit(): void {      
    this.pitchType = 'Five a Side';  
  }
}
