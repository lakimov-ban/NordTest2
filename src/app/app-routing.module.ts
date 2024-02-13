import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "profile",
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: "top-users",
    loadChildren: () => import('./modules/top-users/top-users.module').then(m => m.TopUsersModule)
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
