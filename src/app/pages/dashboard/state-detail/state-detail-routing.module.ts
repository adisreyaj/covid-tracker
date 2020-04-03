import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateDetailComponent } from './state-detail.component';

const routes: Routes = [{ path: '', component: StateDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateDetailRoutingModule { }
