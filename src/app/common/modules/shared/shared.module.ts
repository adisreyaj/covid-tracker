/*
 * File: shared.module.ts
 * Project: covid-tracker
 * Description:
 * File Created: Thursday, 2nd April 2020 1:00:59 am
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Thursday, 2nd April 2020 1:01:01 am
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { QuickStatsComponent } from '../../components/quick-stats/quick-stats.component';
import { MaterialModule } from '../material/material.module';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { IndiaMapComponent } from '../../components/india-map/india-map.component';

@NgModule({
  declarations: [QuickStatsComponent, CategoryCardComponent, IndiaMapComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, RouterModule],
  exports: [QuickStatsComponent, CategoryCardComponent, IndiaMapComponent]
})
export class SharedModule {}
