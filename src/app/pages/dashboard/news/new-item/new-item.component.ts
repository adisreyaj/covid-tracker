import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../../common/interfaces/news.interface';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  @Input() news: Article;
  constructor() {}

  ngOnInit(): void {}
}
