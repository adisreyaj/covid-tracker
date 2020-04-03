/*
 * File: district-data.interface.ts
 * Project: covid-tracker
 * Description:
 * File Created: Friday, 3rd April 2020 2:01:32 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Friday, 3rd April 2020 2:01:34 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export interface DistrictData {
  [key: string]: {
    districtData: {
      [key: string]: DistrictDataItem;
    };
  };
}

export interface DistrictDataItem {
  confirmed: number;
  lastupdatedtime: string;
  delta: Delta;
}

export interface Delta {
  confirmed: number;
}
