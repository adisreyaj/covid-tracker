/*
 * File: contacts.interface.ts
 * Project: covid-tracker
 * Description:
 * File Created: Friday, 3rd April 2020 1:08:59 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 3rd April 2020 1:08:59 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export interface ContactInfo {
  success: boolean;
  data: Data;
  lastRefreshed: string;
  lastOriginUpdate: string;
}

export interface Data {
  contacts: Contacts;
}

export interface Contacts {
  primary: Primary;
  regional: Regional[];
}

export interface Primary {
  number: string;
  'number-tollfree': string;
  email: string;
  twitter: string;
  facebook: string;
  media: string[];
}

export interface Regional {
  loc: string;
  number: string;
}
