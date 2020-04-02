import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../../common/modules/shared/shared.module';
import { MaterialModule } from '../../../common/modules/material/material.module';
import { ContactInfoComponent } from './contact-info/contact-info.component';

@NgModule({
  declarations: [HomeComponent, ContactInfoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule {}
