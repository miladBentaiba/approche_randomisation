import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-resolution',
  styleUrls: ['./case-extraction.component.scss'],
  templateUrl: './case-extraction.component.html',
})
export class CaseExtractionComponent  {
  cars: any[] = [{'vin': 'A', 'year': 'b', 'brand': 'c', 'color': 'd'}];

  selectedCars: any[];

  constructor() {
  }


}

