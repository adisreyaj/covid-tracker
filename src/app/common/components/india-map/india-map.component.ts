import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-india-map',
  templateUrl: './india-map.component.html',
  styleUrls: ['./india-map.component.scss']
})
export class IndiaMapComponent implements OnInit {
  @Input() selectedState: string;
  constructor() {}

  ngOnInit(): void {
    console.log({ state: this.selectedState });
  }
}
