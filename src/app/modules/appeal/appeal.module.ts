import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppealComponent} from "./appeal.component";
import {RouterModule, Routes} from "@angular/router";
import { WriteAppealComponent } from './write-appeal/write-appeal.component';
import {SharedModule} from "../../@shared/shared.module";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: AppealComponent
  },
  {
    path: 'write',
    component: WriteAppealComponent
  }
];

@NgModule({
  declarations: [
    AppealComponent,
    WriteAppealComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ],
  exports:[
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppealModule { }
