import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StateDetailRoutingModule } from './state-detail-routing.module';
import { StateDetailComponent } from './state-detail.component';
import { MaterialModule } from '../../../common/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../common/modules/shared/shared.module';

@NgModule({
  declarations: [StateDetailComponent],
  imports: [
    CommonModule,
    StateDetailRoutingModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StateDetailModule {}
