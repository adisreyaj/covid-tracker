import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map, filter, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ContactInfo } from '../interfaces/contacts.interface';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  endpoint = environment.data_url;
  contactsEndpoint = environment.contact_url;
  constructor(private http: HttpClient) {}

  getLatestData() {
    return this.http.get<any>(this.endpoint).pipe(shareReplay(1));
  }

  getStateWiseData() {
    return this.getLatestData().pipe(
      map(data => data.statewise),
      map(states => states.filter(item => item.state !== 'Total'))
    );
  }

  getTotalStatus() {
    return this.getLatestData().pipe(
      map((data: any) => {
        const total = data.statewise[0];
        const delta = data.key_values[0];
        const deltaMap = new Map([
          ['confirmed', 'confirmeddelta'],
          ['deaths', 'deceaseddelta'],
          ['recovered', 'recovereddelta']
        ]);
        const keys = ['active', 'confirmed', 'deaths', 'recovered'];
        return keys.map(key => {
          return {
            label: key,
            value: total[key],
            delta: delta[deltaMap.get(key)]
          };
        });
      })
    );
  }

  getContactDetails() {
    return this.http.get<ContactInfo>(this.contactsEndpoint).pipe(shareReplay(1));
  }

  getPrimaryContactDetails() {
    return this.getContactDetails().pipe(map(data => data.data.contacts.primary));
  }
}
