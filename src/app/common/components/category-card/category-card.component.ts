import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() data;

  expanded = false;
  constructor() {}

  ngOnInit(): void {}

  toggleBody() {
    return (this.expanded = !this.expanded);
  }
}
