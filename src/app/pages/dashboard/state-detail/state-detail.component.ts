import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../../common/services/http.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.scss']
})
export class StateDetailComponent implements OnInit {
  districtData$: Observable<{ contact: any; stats: any }>;

  searchTerm: FormControl;
  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const state = this.getCurrentStateFromURL();
    if (state) {
      this.districtData$ = this.getAllDetailsForState(state);
    }
  }

  private getAllDetailsForState(state: string) {
    return combineLatest([this.getDistrictDataForState(state), this.getContactDetailsForState(state)]).pipe(
      map(([districtData, contactData]) => {
        return {
          contact: contactData,
          stats: districtData
        };
      })
    );
  }

  private getCurrentStateFromURL() {
    return this.activatedRoute.snapshot.params['state'];
  }

  private getDistrictDataForState(state: string) {
    return this.httpService.getDistrictDataForState(state);
  }

  private getContactDetailsForState(state: string) {
    return this.httpService.getContactDetailsOfState(state);
  }
}
