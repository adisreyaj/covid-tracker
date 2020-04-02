import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../common/services/http.service';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, tap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  totalStats$;

  stateWiseData$;

  searchTerm: FormControl;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.searchTerm = new FormControl();
    this.totalStats$ = this.httpService.getTotalStatus();
    this.stateWiseData$ = this.httpService.getStateWiseData();
    this.searchTerm.valueChanges
      .pipe(
        debounceTime(500),
        tap(data => {
          this.stateWiseData$ = this.httpService.getStateWiseData().pipe(
            map(states =>
              states.filter(item => {
                return item.state.toLowerCase().includes(data.toLowerCase());
              })
            )
          );
        })
      )
      .subscribe();
  }
}
