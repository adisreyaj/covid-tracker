import { Component, OnInit, Input } from '@angular/core';
export interface QuickStatsData {
  label: string;
  value: number;
  delta: number;
}

@Component({
  selector: 'app-quick-stats',
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.scss']
})
export class QuickStatsComponent implements OnInit {
  @Input() data: QuickStatsData;
  constructor() {}

  ngOnInit(): void {}
}
