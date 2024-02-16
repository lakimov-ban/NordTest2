import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {RouterModule, Routes} from "@angular/router";
import {TopUsersComponent} from "./top-users/top-users.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../@shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'top',
    component: TopUsersComponent
  }
];

@NgModule({
  declarations: [
    UsersComponent,
      TopUsersComponent
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
export class UsersModule { }
