import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

//import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'green',
    loadChildren: () => import('./green/green.module').then(m => m.GreenModule)
  },
  {
    path: 'violet',
    loadChildren: () => import('./violet/violet.module').then(m => m.VioletModule)
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
