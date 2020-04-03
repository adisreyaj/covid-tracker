import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../common/services/http.service';
import { Observable } from 'rxjs';
import { NewsData } from '../../../common/interfaces/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news$: Observable<NewsData>;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.news$ = this.httpService.getNews();
  }
}
