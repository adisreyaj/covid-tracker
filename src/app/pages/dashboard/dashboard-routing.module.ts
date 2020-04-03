import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      { path: 'world', loadChildren: () => import('./world/world.module').then(m => m.WorldModule) },
      { path: 'stats', loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule) },
      { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      {
        path: 'view/:state',
        loadChildren: () => import('./state-detail/state-detail.module').then(m => m.StateDetailModule)
      },
      { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
