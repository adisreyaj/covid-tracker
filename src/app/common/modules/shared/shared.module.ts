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

import { QuickStatsComponent } from '../../components/quick-stats/quick-stats.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [QuickStatsComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [QuickStatsComponent]
})
export class SharedModule {}
