import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import {RouterModule, Routes} from "@angular/router";
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'security',
        component: SecurityComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    SettingsComponent,
    SecurityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SettingsModule { }
