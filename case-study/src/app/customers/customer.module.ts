import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerRoutingModule} from './customer-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    FormsModule,
  ]
})
export class CustomerModule { }
