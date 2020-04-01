import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../common/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  totalStats$;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.totalStats$ = this.httpService.getTotalStatus();
  }
}
