import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'city',
    loadChildren: () =>
      import('./pages/city/city.module').then((m) => m.CityModule),
  },
  {
    path: 'agent',
    loadChildren: () =>
      import('./pages/agent/agent.module').then((m) => m.AgentModule),
  },
  {
    path: 'house',
    loadChildren: () =>
      import('./pages/house/house.module').then((m) => m.HouseModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
