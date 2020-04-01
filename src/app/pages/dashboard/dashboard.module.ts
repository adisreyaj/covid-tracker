import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../common/modules/material/material.module';
import { NavBarComponent } from '../../common/components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../../common/components/header/header.component';

@NgModule({
  declarations: [DashboardComponent, NavBarComponent, HeaderComponent],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule, FlexLayoutModule]
})
export class DashboardModule {}
