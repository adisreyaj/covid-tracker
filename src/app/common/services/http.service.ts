import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  endpoint = environment.data_url;
  constructor(private http: HttpClient) {}

  getLatestData() {
    return this.http.get<any>(this.endpoint).pipe(shareReplay(1));
  }

  getTotalStatus() {
    return this.getLatestData().pipe(
      map((data: any) => {
        const total = data.statewise[0];
        const keys = ['active', 'confirmed', 'deaths', 'recovered'];
        return keys.map(key => {
          return {
            label: key,
            value: total[key],
            delta: total['delta'][key]
          };
        });
      })
    );
  }
}
