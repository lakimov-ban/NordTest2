import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "profile",
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: "users",
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: "settings",
    loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: "appeal",
    loadChildren: () => import('./modules/appeal/appeal.module').then(m => m.AppealModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
